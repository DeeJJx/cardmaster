// // /app/api/auth/route.ts

import { NextRequest, NextResponse } from 'next/server';
// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers/index';
// // import CredentialsProvider from 'next-auth/providers/credentials'

// export function GET(request: NextRequest) {
//   return NextAuth({
//     providers: [
//       Providers.Google({
//         clientId: process.env.GOOGLE_CLIENT_ID!,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       }),
//     ],
//   });
// }

export async function POST(request: NextRequest) {
  // Handle POST request for authentication
  return NextResponse.json({ message: 'Auth route' });
}

// export default function handler(req: any, res: any) {
//     res.status(200).json({ message: "Hello from the API route!" });
//   }
