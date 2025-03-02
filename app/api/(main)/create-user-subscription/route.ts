import { NextRequest, NextResponse } from 'next/server';
import { createUserSubscription } from '@/db/queries/insert';
import { getUserSubscriptionByEmail } from '@/db/queries/select';

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const userExists = await getUserSubscriptionByEmail(email);

    console.log(userExists);

    if (userExists.length > 0) {
        return NextResponse.json({ message: 'User already subscribed' }, { status: 200 });
    }

    await createUserSubscription({ name, email });

    return NextResponse.json({ message: 'Subscription created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating user subscription:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}