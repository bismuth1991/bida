import type { Config } from 'drizzle-kit'

export default {
  dialect: 'sqlite',
  schema: './src/server/db/drizzle/schema.ts',
  out: './src/server/db/drizzle/migrations',
} satisfies Config
