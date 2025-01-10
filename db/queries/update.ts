import { eq } from 'drizzle-orm';
import { db } from '../index';
import { SelectAdmin, adminsTable } from '../schema';

export async function updateAdmin(email: string, updateData: { sessionKey: string }) {
    const result = await db
      .update(adminsTable)
      .set(updateData)
      .where(eq(adminsTable.email, email));
  
    if (!result) {
      console.error(`Failed to update session key for admin with email: ${email}`);
    }
  
    return result;
  }  