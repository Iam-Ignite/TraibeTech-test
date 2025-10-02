import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");

  // If we don't have the required params, redirect to login
  if (!token_hash || type !== "email") {
    return redirect("/login");
  }

  const { supabase, headers } = createSupabaseServerClient(request);

  // Exchange the token for a session
  const { error } = await supabase.auth.verifyOtp({
    token_hash,
    type: "email",
  });

  if (error) {
    console.error("Error confirming email:", error);
    // Redirect to login with error message
    return redirect("/login?error=confirmation_failed");
  }

  // Successfully confirmed - redirect to login with success message
  return redirect("/login?confirmed=true", { headers });
}
