import { NextRequest, NextResponse } from 'next/server';
import { getAdminByEmail } from '@/db/queries/select';
import { updateAdminSessionKey } from '@/db/queries/update';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const admin = await getAdminByEmail(email);

    if (admin.length === 0) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }

    const match = await bcrypt.compare(password, admin[0].password);

    if (!match) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    await updateAdminSessionKey(email, '');

    const sessionToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '24h' });

    const hashedSessionKey = await bcrypt.hash(sessionToken, 12);

    await updateAdminSessionKey(email, hashedSessionKey);

    const response = NextResponse.json(
      { message: 'Admin authenticated successfully' },
      { status: 200 }
    );

    response.cookies.set('medsim-innovations-session-token', sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/admin',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return response;
  } catch (error) {
    console.error('Error authenticating admin:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}