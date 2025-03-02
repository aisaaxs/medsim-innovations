import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userQueriesTable = sqliteTable('user_queries', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    message: text('message').notNull()
});

export type InsertUserQuery = typeof userQueriesTable.$inferInsert;
export type SelectUserQuery = typeof userQueriesTable.$inferSelect;


export const userSubscriptionsTable = sqliteTable('user_subscriptions', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
});

export type InsertUserSubscription = typeof userSubscriptionsTable.$inferInsert;
export type SelectUserSubscription = typeof userSubscriptionsTable.$inferSelect;

export const adminsTable = sqliteTable('admins', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    sessionKey: text('session_key')
});

export type SelectAdmin = typeof adminsTable.$inferSelect;
export type UpdateAdmin = Partial<Omit<SelectAdmin, 'id'>> & { id: number };