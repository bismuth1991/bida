import type { Config } from 'drizzle-kit'

export default {
  dialect: 'sqlite',
  schema: './src/db/drizzle/schema.ts',
  out: './src/db/drizzle/migrations',
} satisfies Config
