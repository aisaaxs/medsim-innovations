import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { getAdminBySessionKey } from '@/db/queries/select';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const { email, sessionKey } = payload;

    console.log(email, sessionKey);

    const admin = await getAdminBySessionKey(email as string, sessionKey as string);

    console.log(admin);

    if (admin) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  } catch (error) {
    console.error('Middleware authentication error:', error);
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

export const config = {
  matcher: ['/admin/dashboard'],
};