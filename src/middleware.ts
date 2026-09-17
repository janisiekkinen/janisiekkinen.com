import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { site } from "./config/site";

const CANONICAL_HOST = new URL(site.domain).host;

function requestHost(req: NextRequest) {
  return (req.headers.get("host") ?? "").split(":")[0]?.toLowerCase() ?? "";
}

function requestProto(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-proto");
  if (forwarded) return forwarded.split(",")[0]?.trim().toLowerCase() ?? "";
  return req.nextUrl.protocol.replace(":", "").toLowerCase();
}

function isLocalHost(host: string) {
  return host === "localhost" || host === "127.0.0.1" || host.endsWith(".localhost");
}

function canonicalPath(pathname: string) {
  if (pathname === "/") return "/";
  if (/\.[a-z0-9]+$/i.test(pathname)) return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function canonicalRedirect(req: NextRequest) {
  const host = requestHost(req);
  if (!host || isLocalHost(host) || host.endsWith(".workers.dev")) return null;

  const proto = requestProto(req);
  const hostWrong = host !== CANONICAL_HOST;
  const protoWrong = proto === "http";
  if (!hostWrong && !protoWrong) return null;

  const path = `${canonicalPath(req.nextUrl.pathname)}${req.nextUrl.search}`;
  return NextResponse.redirect(`https://${CANONICAL_HOST}${path}`, 301);
}

export function middleware(req: NextRequest) {
  const redirect = canonicalRedirect(req);
  if (redirect) return redirect;

  const res = NextResponse.next();
  const host = requestHost(req);
  if (host.endsWith(".workers.dev")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  const path = req.nextUrl.pathname;
  const locale = path === "/en" || path === "/en/" || path.startsWith("/en/") ? "en" : "fi";
  res.headers.set("x-locale", locale);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|fonts/|.*\\.(?:svg|png|ico|jpg|txt|xml|webmanifest)$).*)"],
};
