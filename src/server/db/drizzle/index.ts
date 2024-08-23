import { migrate as _migrate } from 'drizzle-orm/libsql/migrator'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

export const dz = drizzle(
  createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  }),
)

export const migrate = () => {
  void _migrate(dz, { migrationsFolder: './src/db/drizzle/migrations' })
}
