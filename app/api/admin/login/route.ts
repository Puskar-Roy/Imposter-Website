import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-123-change-me';
const secret = new TextEncoder().encode(JWT_SECRET);

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    await dbConnect();


    const user = await User.findOne({ username });

    if (user) {

      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const token = await new SignJWT({ username: user.username })
          .setProtectedHeader({ alg: 'HS256' })
          .setIssuedAt()
          .setExpirationTime('2h')
          .sign(secret);

        const cookieStore = await cookies();
        cookieStore.set('admin_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 2,
          path: '/',
        });

        return NextResponse.json({ success: true });
      }
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
