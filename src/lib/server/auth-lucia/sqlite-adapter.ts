// @see https://lucia-auth.com/database-adapters/better-sqlite3/
import { betterSqlite3 } from '@lucia-auth/adapter-sqlite';
import sqlite from 'better-sqlite3';

import { env } from '$env/dynamic/private';

const db = sqlite(env.DATABASE_URL);

export const sqliteAdapter = betterSqlite3(db, {
  user: 'user',
  key: 'user_key',
  session: 'user_session'
});
