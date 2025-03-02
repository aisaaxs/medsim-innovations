import { eq } from 'drizzle-orm';
import { db } from '../index';
import { SelectUserSubscription, userSubscriptionsTable, SelectAdmin, adminsTable } from '../schema';


export async function getUserSubscriptionByEmail(email: SelectUserSubscription['email']): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
  }>
> {
  return db.select().from(userSubscriptionsTable).where(eq(userSubscriptionsTable.email, email));
}

export async function getAdminByEmail(email: SelectAdmin['email']): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
    password: string;
    sessionKey: string | null;
  }>
> {
  return db.select().from(adminsTable).where(eq(adminsTable.email, email));
}