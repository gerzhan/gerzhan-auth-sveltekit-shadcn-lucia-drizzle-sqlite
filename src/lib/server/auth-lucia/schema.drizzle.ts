// @see https://lucia-auth.com/database-adapters/better-sqlite3/#sqlite3-schema
import { sqliteTable, text, blob } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  // additional user attributes
  first_name: text('first_name'),
  last_name: text('last_name'),
  email: text('email').notNull()
});

export const key = sqliteTable('user_key', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  hashedPassword: text('hashed_password')
});

export const session = sqliteTable('user_session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  activeExpires: blob('active_expires', {
    mode: 'bigint'
  }).notNull(),
  idleExpires: blob('idle_expires', {
    mode: 'bigint'
  }).notNull()
});
