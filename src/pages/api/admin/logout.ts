import type { APIRoute } from "astro";
import { ADMIN_COOKIE_NAME } from "@/lib/adminAuth";

export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {
  cookies.delete(ADMIN_COOKIE_NAME, { path: "/" });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
