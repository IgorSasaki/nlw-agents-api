import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'

import { db } from '../db/connection.ts'
import { schema } from '../db/schema/index.ts'

export const getRoomsRoute: FastifyPluginCallbackZod = app => {
  app.get('/rooms', async () => {
    const results = await db
      .select({
        createdAt: schema.rooms.createdAt,
        id: schema.rooms.roomId,
        name: schema.rooms.name
      })
      .from(schema.rooms)
      .groupBy(schema.rooms.roomId)
      .orderBy(schema.rooms.createdAt)

    return results
  })
}
