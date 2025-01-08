import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './db/schema.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL! as string,
    authToken: process.env.TURSO_AUTH_TOKEN! as string,
  },
}) satisfies Config;