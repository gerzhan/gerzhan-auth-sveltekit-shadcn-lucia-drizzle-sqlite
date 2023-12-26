// @see github.com/lucia-auth/examples](https://github.com/lucia-auth/examples/blob/main/sveltekit/email-and-password/src/hooks.server.ts
import { authLucia as auth } from '$lib/server/auth-lucia';

export const handle = async ({ event, resolve }) => {
  // we can pass `event` because we used the SvelteKit middleware
  event.locals.auth = auth.handleRequest(event);
  return await resolve(event);
};
