
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
    interface User {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }
};



export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.error("Email or password is missing");
                    return null;
                }

                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    });

                    if (!res.ok) {
                        console.error("User login failed:", await res.text());
                        return null;
                    }

                    const user = await res.json();
                    // console.log(user);
                    if (user) {
                        return {
                            id: user.data.id,
                            email: user.data.email,
                            name: user.data.name,
                            image: user?.data?.picture,
                        };
                    }
                    return null;
                } catch (error) {
                    console.error("Authorize error:", error);
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        // * handle server component
        async jwt({ token, user }) {
            if (user) {
                token.id = user?.id
            }
            return token;
        },
        // * handle client or session component
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token.id as string
            }
            return session;
        }

    },


    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};

export default NextAuth(authOptions);
