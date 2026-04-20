import { NextResponse } from "next/server";
import { getSessionCookieName } from "../../../lib/proposal-auth";

export async function GET(request) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.set(getSessionCookieName(), "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
