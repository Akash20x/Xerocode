import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import bcrypt from 'bcrypt'
 

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            profile(profile: GoogleProfile) {
                return {
                    ...profile,
                    role: "user",
                    id : profile.sub,
                }
            },
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),
          CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "your-email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials


                if(!credentials?.email || !credentials?.password) {
                   throw new Error('Please enter an email and password')
                }

                const {email,password} = credentials;

                connect()

                const user = await User.findOne({ email });

                if(!user){
                    throw new Error('User not found')
                }

                const comparePassword = await bcrypt.compare(password, user.password);

                if (!comparePassword) {
                  throw new Error('Wrong password')
                }    
            
               return user
            }

            
        })
    ],
        callbacks: {
        async signIn({ user}) {
            connect()
            
            try{
                const existingUser = await User.findOne({ email: user.email });
                
                if (!existingUser) {
                const newUser = new User({
                    email: user.email,
                    role: "user"
                  });
                  await newUser.save();     
                }
            }
            catch(error){
                console.log(error);
            }

            return true
            
            },
        async jwt({ token, user }) {

            if (user) {
                token.role = user.role; 
            }
                        
            return token
        },
        async session({ session, token }) {

        if (token) {
                session.user.role = token.role as string
            }
        
          return session;
        },
      },
      pages: {
        signIn: '/login', 
      },
}
