import { NextResponse } from 'next/server';
import { getAdminByEmail } from '@/db/queries/select';
import bcrypt from 'bcryptjs';
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
        console.error("🔴 No session token found in request cookies.");
        return NextResponse.json({ error: 'No session token found' }, { status: 401 });
        }

        let decoded;
        try {
        decoded = jwt.verify(sessionToken, JWT_SECRET) as { email: string };
        } catch (error) {
        console.error("🔴 JWT verification failed:", error);
        return NextResponse.json({ error: 'Invalid or expired session token' }, { status: 401 });
        }

        if (!decoded.email) {
        return NextResponse.json({ error: 'Session token does not contain a valid email.' }, { status: 403 });
        }

        const email = decoded.email;
        console.log("🔹 Validating session for:", email);

        const admin = await getAdminByEmail(email);
        if (admin.length === 0) {
        console.error("🔴 Admin not found:", email);
        return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
        }

        const storedSessionKey = admin[0].sessionKey;
        if (!storedSessionKey) {
        console.error("🔴 No active session key found in DB.");
        return NextResponse.json({ error: 'No active session found' }, { status: 403 });
        }

        const isValid = await bcrypt.compare(sessionToken, storedSessionKey);
        if (!isValid) {
        console.error("🔴 Session token does not match stored session key.");
        return NextResponse.json({ error: 'Session is invalid or has been tampered with' }, { status: 403 });
        }

        console.log("✅ Session is valid.");
        return NextResponse.json({ message: 'Session is valid' }, { status: 200 });
    } catch (error) {
        console.error('🔥 Error validating admin session:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}