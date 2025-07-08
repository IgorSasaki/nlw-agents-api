import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'

import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:5173'
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', async () => {
  return { status: 'ok' }
})

app
  .listen({ port: env.PORT })
  .then(() => {
    console.log(`HTTP Server running in port ${env.PORT}! 🚀🚀`)
  })
  .catch(error => console.error({ serverError: error }))
