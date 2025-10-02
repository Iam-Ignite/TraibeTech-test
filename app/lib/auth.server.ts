import { redirect } from "@remix-run/node";
import { createSupabaseServerClient } from "./supabase.server";
import { prisma } from "./db.server";

export async function requireAuth(request: Request) {
  try {
    const { supabase, headers } = createSupabaseServerClient(request);

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    // Debug logging for local development
    console.log("[Auth] requireAuth called for:", request.url);
    console.log("[Auth] Session exists:", !!session);
    console.log("[Auth] Session error:", sessionError?.message || "none");

    if (sessionError) {
      console.error("[Auth] Session error - redirecting to login:", sessionError);
      throw redirect("/login");
    }

    if (!session) {
      console.log("[Auth] No session found - redirecting to login");
      throw redirect("/login");
    }

    console.log("[Auth] Session found for user:", session.user.email);

    // Get or create user in our database
    let user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    });

    if (!user) {
      try {
        user = await prisma.user.create({
          data: {
            id: session.user.id,
            email: session.user.email!,
          },
        });
      } catch (dbError) {
        console.error("Error creating user in database:", dbError);
        // If user creation fails, try to find the user again (might be a race condition)
        user = await prisma.user.findUnique({
          where: { email: session.user.email! },
        });

        if (!user) {
          throw new Error("Failed to create or find user in database");
        }
      }
    }

    return { user, session, headers };
  } catch (error) {
    // If it's a redirect, throw it
    if (error instanceof Response) {
      throw error;
    }
    // Otherwise log and redirect to login
    console.error("Auth error:", error);
    throw redirect("/login");
  }
}

export async function getUser(request: Request) {
  try {
    const { supabase } = createSupabaseServerClient(request);

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    });

    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}
