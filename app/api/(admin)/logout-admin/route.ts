import { NextResponse } from 'next/server';
import { updateAdminSessionKey } from '@/db/queries/update';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST() {
  const JWT_SECRET = process.env.JWT_SECRET;
    
  if (!JWT_SECRET) {
      throw new Error('No JWT secret found in environment variables');
  }

  try {
    const cookieStore = cookies();
    const sessionToken = (await cookieStore).get('medsim-innovations-session-token')?.value;

    if (!sessionToken) {
      return NextResponse.json({ error: 'No session token found' }, { status: 401 });
    }

    let decoded;
    try {
      decoded = jwt.verify(sessionToken, JWT_SECRET) as { email: string };
    } catch (error) {
      return NextResponse.json({ error: 'Invalid session token: ' + error }, { status: 403 });
    }

    if (!decoded.email) {
      return NextResponse.json({ error: 'Invalid session data' }, { status: 403 });
    }

    await updateAdminSessionKey(decoded.email, '');

    (await cookieStore).delete('medsim-innovations-session-token');

    return NextResponse.json({ message: 'Admin logged out successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error logging out admin:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}