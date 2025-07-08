import { reset, seed } from 'drizzle-seed'

import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)

await seed(db, schema).refine(f => {
  return {
    rooms: {
      columns: {
        description: f.loremIpsum(),
        name: f.companyName()
      },
      count: 5
    }
  }
})

await sql.end()
