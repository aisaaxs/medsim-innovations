import { eq, and } from 'drizzle-orm';
import { db } from '../index';
import { adminsTable, SelectUserSubscription, userSubscriptionsTable } from '../schema';
import bcrypt from 'bcryptjs';


export async function getUserSubscriptionByEmail(email: SelectUserSubscription['email']): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
  }>
> {
  return db.select().from(userSubscriptionsTable).where(eq(userSubscriptionsTable.email, email));
}

export async function getAdmin(email: string, password: string): Promise<boolean> {
  const admin = await db
    .select()
    .from(adminsTable)
    .where(eq(adminsTable.email, email))
    .limit(1);

  if (admin.length === 0) return false;

  const isPasswordValid = await bcrypt.compare(password, admin[0].password);
  return isPasswordValid;
}

export async function getAdminBySessionKey(email: string, sessionKey: string) {
  const result = await db
    .select()
    .from(adminsTable)
    .where(
      and(
        eq(adminsTable.email, email),
        eq(adminsTable.sessionKey, sessionKey)
      )
    )
    .limit(1);

  if (result.length === 0) {
    console.error(`No admin found with email ${email} and sessionKey ${sessionKey}.`);
    return null;
  }

  return result[0];
}