import { eq } from 'drizzle-orm';
import { db } from '../index';
import { adminsTable, UpdateAdmin } from '../schema';

export async function updateAdminSessionKey(email: UpdateAdmin['email'], newSessionKey: string) {
    if (!email) {
        throw new Error("Email is required to update the session key.");
    }

    await db.update(adminsTable).set({ sessionKey: newSessionKey }).where(eq(adminsTable.email, email));
}