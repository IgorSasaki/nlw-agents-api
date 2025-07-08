import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const rooms = pgTable('rooms', {
  createdAt: timestamp().defaultNow().notNull(),
  description: text(),
  name: text().notNull(),
  roomId: uuid().primaryKey().defaultRandom()
})
