import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const isLoginPage = url.pathname === '/admin/auth' || url.pathname === '/admin';

    const response = await fetch(new URL('/api/validate-admin', request.url), {
      method: 'POST',
      headers: request.headers,
      credentials: 'include'
    });

    const isValidAdmin = response.status === 200;

    if (isValidAdmin && isLoginPage) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    if (!isValidAdmin && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin/auth', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('🔥 Middleware Error:', error);
    return NextResponse.redirect(new URL('/admin/auth', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};