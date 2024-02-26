import NextAuth from 'next-auth';
import { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

export const authOptions:NextAuthOptions= {
  providers: [
    // Add providers here
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,            
      }),
    // ...add other providers as needed
  ],
  // Add any other NextAuth configuration here
};
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}