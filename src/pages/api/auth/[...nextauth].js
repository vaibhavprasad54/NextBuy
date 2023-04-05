import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)





//Steps to Authenticate user using Google, Github etc:

// Step 1 - Add NextAuth.js provider code in the File, ex: GoogleProvider, GithubProvider etc.
// Step 2 - Generate and Add their respective ID and Secret key in .env file.
// Step 3 - Use the "signIn" and "useSession" hooks from next-auth to sign-in, sign-out or display username.

//         Done!!! We have successfully created Login, Logout functionality using multiple platforms.