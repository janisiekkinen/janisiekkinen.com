import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const path = req.nextUrl.pathname;
  const locale = path === "/en" || path === "/en/" || path.startsWith("/en/") ? "en" : "fi";
  res.headers.set("x-locale", locale);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|fonts/|.*\\.(?:svg|png|ico|jpg|txt|xml|webmanifest)$).*)"],
};
