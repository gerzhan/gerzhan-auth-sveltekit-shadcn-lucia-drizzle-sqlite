import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { sqliteAdapter } from './sqlite-adapter';

import { dev } from '$app/environment';

// expect error (see next section)
export const authLucia = lucia({
  // NOTE: подключение адаптера для взаимодействия с конкретной БД
  adapter: sqliteAdapter,
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  // NOTE: дополнительные данные о пользователе для приложения
  getUserAttributes: (db) => {
    return {
      first_name: db.first_name,
      last_name: db.last_name,
      email: db.email
    };
  }
});

export type Auth = typeof auth;
