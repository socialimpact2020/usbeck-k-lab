import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/signin")) {
    if (token && process.env.NEXTAUTH_URL) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/demo") || pathname.startsWith("/dashboard")) {
    if (!token && process.env.NEXTAUTH_URL) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/signin", "/demo/:path*", "/dashboard/:path*"],
};
