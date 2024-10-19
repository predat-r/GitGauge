import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization:{
      params:{
        scope:"repo user"
      }
      }
    }),
    
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token; // Storing the access token
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken; // Adding the access token to the session
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
};
