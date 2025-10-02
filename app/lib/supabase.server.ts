import { createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const isProduction = process.env.NODE_ENV === "production";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export function createSupabaseServerClient(request: Request) {
  const headers = new Headers();

  const supabase = createServerClient(supabaseUrl!, supabaseAnonKey!, {
    cookies: {
      getAll() {
        const cookies = parseCookieHeader(request.headers.get("Cookie") ?? "");

        // Debug logging in development and production
        if (!isProduction || process.env.DEBUG_AUTH === 'true') {
          console.log('[Supabase SSR] Getting cookies:', cookies.map(c => c.name).join(', '));
          console.log('[Supabase SSR] Cookie count:', cookies.length);
        }

        return cookies;
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          // Ensure production-safe cookie options
          const cookieOptions = {
            ...options,
            sameSite: 'lax' as const,
            httpOnly: true,
            secure: isProduction,
            path: '/',
            maxAge: options.maxAge ?? 60 * 60 * 24 * 7, // 7 days default
          };

          // Debug logging in development and production
          if (!isProduction || process.env.DEBUG_AUTH === 'true') {
            console.log('[Supabase SSR] Setting cookie:', name, 'secure:', cookieOptions.secure);
          }

          headers.append("Set-Cookie", serializeCookieHeader(name, value, cookieOptions));
        });
      },
    },
  });

  return { supabase, headers };
}
