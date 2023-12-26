import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    return { firstName: null };
  }

  return {
    firstName: session.user.first_name
  };
}) satisfies PageServerLoad;
