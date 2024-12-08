import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions={
    secret: process.env.NEXTAUTH_SECRET ,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" },
            },
            async authorize(credentials) {
                const {email, password} = credentials;
                if (!credentials || !credentials.email || !credentials.password) {
                    console.error("Missing credentials");
                    return null;
                }
               
                if(email){
                    const currentUser = users.find((user) => user.email === email)
                    if(currentUser){
                        if(currentUser.password === password){
                            return {...currentUser};
                        }
                    } 
                }
                return null; 
            },
        }),
    ],

    callbacks: {
   
        
        async jwt({ token, user, account, }) {
            if (account) {
              token.type = user.type;
            }
          return token
        },
        async session({ session, token,  }) {
            session.user.type = token.type;
            return session
          },
      }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

const users = [
    { id: 1, name: "Test User",  type:"admin", email: "test@example.com", password: "password123" },
    { id: 2, name: "User 2", type:"user", email: "user2@example.com", password: "user2password" },
];