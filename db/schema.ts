import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const userQueriesTable = sqliteTable('user_queries', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    createdAt: text('created_at')
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    message: text('message').notNull()
});

export type InsertUserQuery = typeof userQueriesTable.$inferInsert;
export type SelectUserQuery = typeof userQueriesTable.$inferSelect;


export const userSubscriptionsTable = sqliteTable('user_subscriptions', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    createdAt: text('created_at')
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
});

export type InsertUserSubscription = typeof userSubscriptionsTable.$inferInsert;
export type SelectUserSubscription = typeof userSubscriptionsTable.$inferSelect;


// export const usersTable = sqliteTable('users', {
//   id: integer('id').primaryKey(),
//   name: text('name').notNull(),
//   age: integer('age').notNull(),
//   email: text('email').unique().notNull(),
// });

// export const postsTable = sqliteTable('posts', {
//   id: integer('id').primaryKey(),
//   title: text('title').notNull(),
//   content: text('content').notNull(),
//   userId: integer('user_id')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'cascade' }),
//   createdAt: text('created_at')
//     .default(sql`(CURRENT_TIMESTAMP)`)
//     .notNull(),
//   updateAt: integer('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
// });

// export type InsertUser = typeof usersTable.$inferInsert;
// export type SelectUser = typeof usersTable.$inferSelect;

// export type InsertPost = typeof postsTable.$inferInsert;
// export type SelectPost = typeof postsTable.$inferSelect;
