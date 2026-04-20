import { NextResponse } from "next/server";
import {
  areValidProposalCredentials,
  createProposalSessionValue,
  getSessionCookieName,
  getSessionTtlSeconds,
  isProposalAuthConfigured,
} from "../../../lib/proposal-auth";

function getSafeRedirectPath(pathname) {
  if (!pathname || typeof pathname !== "string") return "/";
  if (!pathname.startsWith("/")) return "/";
  if (pathname.startsWith("/login") || pathname.startsWith("/api/")) return "/";
  return pathname;
}

export async function POST(request) {
  if (!isProposalAuthConfigured()) {
    return NextResponse.redirect(new URL("/", request.url), 303);
  }

  const form = await request.formData();
  const username = String(form.get("username") || "");
  const password = String(form.get("password") || "");
  const nextPath = getSafeRedirectPath(String(form.get("next") || "/"));

  if (!areValidProposalCredentials(username, password)) {
    const failUrl = new URL("/login", request.url);
    failUrl.searchParams.set("error", "1");
    failUrl.searchParams.set("next", nextPath);
    return NextResponse.redirect(failUrl, 303);
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url), 303);
  response.cookies.set(getSessionCookieName(), await createProposalSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: getSessionTtlSeconds(),
  });
  return response;
}
