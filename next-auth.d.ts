import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string|unknown; 
  }

  interface User {
    accessToken?: string; 
  }
}
