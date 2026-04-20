import { NextResponse } from "next/server";
import {
  isProposalAuthConfigured,
  verifyProposalSession,
  parseBasicAuth,
  areValidProposalCredentials,
  getSessionCookieName,
} from "./lib/proposal-auth";

function isPublicPath(pathname) {
  if (
    pathname === "/login" ||
    pathname === "/api/login" ||
    pathname === "/api/logout" ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/_next/")
  ) {
    return true;
  }

  return /\.(png|jpe?g|gif|webp|svg|ico|woff2?|ttf|otf|css|js|map)$/i.test(pathname);
}

function withSecurityHeaders(response) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  response.headers.set("Cache-Control", "private, no-store, max-age=0, must-revalidate");
  return response;
}

export async function proxy(request) {
  const { pathname, search } = request.nextUrl;

  if (isPublicPath(pathname)) {
    return withSecurityHeaders(NextResponse.next());
  }

  if (!isProposalAuthConfigured()) {
    return withSecurityHeaders(NextResponse.next());
  }

  const session = request.cookies.get(getSessionCookieName())?.value;
  if (await verifyProposalSession(session)) {
    return withSecurityHeaders(NextResponse.next());
  }

  const basic = parseBasicAuth(request.headers.get("authorization"));
  if (basic && areValidProposalCredentials(basic.user, basic.pass)) {
    return withSecurityHeaders(NextResponse.next());
  }

  if (request.method === "GET" || request.method === "HEAD") {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = `?next=${encodeURIComponent(`${pathname}${search || ""}`)}`;
    return withSecurityHeaders(NextResponse.redirect(url));
  }

  return withSecurityHeaders(
    NextResponse.json({ error: "Authentication required." }, { status: 401 })
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
