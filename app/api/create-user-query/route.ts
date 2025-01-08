import { NextRequest, NextResponse } from 'next/server';
import { createUserQuery } from '@/db/queries/insert';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const formattedMessage = message.replace(/\n/g, '<br>');

    await createUserQuery({ name, email, message: formattedMessage });

    return NextResponse.json({ message: 'Query created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating user query:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}