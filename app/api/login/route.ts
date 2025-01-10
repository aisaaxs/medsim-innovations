import { NextRequest, NextResponse } from 'next/server';
import { getAdmin } from '@/db/queries/select';
import { updateAdmin } from '@/db/queries/update';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    }

    const isAuthenticated = await getAdmin(email, password);

    if (isAuthenticated) {
      const sessionKey = uuidv4();


      await updateAdmin(email, { sessionKey });

      const token = jwt.sign({ email, sessionKey }, JWT_SECRET, { expiresIn: '1h' });

      const response = NextResponse.json(
        { message: 'Login successful', token },
        { status: 200 }
      );

      response.cookies.set('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60,
      });

      return response;
    } else {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
