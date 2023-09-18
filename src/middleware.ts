import { NextRequest, NextResponse } from "next/server"
import { getToken } from 'next-auth/jwt';

const redirectIfLoggedIn = ['/register','/login']


    export default async function middleware(req: NextRequest) {

        const token = await getToken({ req });


        if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(
                new URL("/login", req.url).toString()
            );
    }

        if (req.nextUrl.pathname.startsWith("/dashboard/stats")
            && token?.role !== "admin") {
                return NextResponse.redirect(
                    new URL("/denied", req.url).toString()
                );
        }

        if (token && redirectIfLoggedIn.includes(req.nextUrl.pathname)) {
            return NextResponse.redirect(
                new URL("/dashboard", req.url).toString()
            );
        }


    }


// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/dashboard:path*","/dashboard/stats","/register","/login"] }