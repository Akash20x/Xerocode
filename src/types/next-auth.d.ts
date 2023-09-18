
import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {

  interface Session {
    user: {
        name?: string | null | undefined
        email?: string | null | undefined,
        role?: string,
    }; 
  }
   interface User extends DefaultUser {
        role: string,
    }
}