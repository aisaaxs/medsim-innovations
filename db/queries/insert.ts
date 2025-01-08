import { db } from '../index';
import { InsertUserQuery, userQueriesTable, InsertUserSubscription, userSubscriptionsTable } from '../schema';

export async function createUserQuery(data: InsertUserQuery) {
  await db.insert(userQueriesTable).values(data);
}

export async function createUserSubscription(data: InsertUserSubscription) {
    await db.insert(userSubscriptionsTable).values(data);
}