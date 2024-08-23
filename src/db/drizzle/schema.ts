import { sqliteTable, integer, real, text } from 'drizzle-orm/sqlite-core'

export const dataPoint = sqliteTable('data_point', {
  id: text('id').primaryKey().notNull(),
  x: real('x').notNull(),
  y: real('y').notNull(),
  z: real('z').notNull(),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
})

export type DataPoint = typeof dataPoint.$inferSelect
