import { eq } from 'drizzle-orm';
import { db } from '../index';
import { SelectUserSubscription, userSubscriptionsTable } from '../schema';

export async function getUserSubscriptionByEmail(email: SelectUserSubscription['email']): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
  }>
> {
  return db.select().from(userSubscriptionsTable).where(eq(userSubscriptionsTable.email, email));
}