import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { env } from "./env.ts";
import { getRoomsRoute } from "./routes/get-room.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", () => {
	return { status: "ok" };
});

app.register(getRoomsRoute);

app
	.listen({ port: env.PORT })
	.then(() => {
		console.log(`HTTP Server running in port ${env.PORT}! 🚀🚀`);
	})
	.catch((error) => console.error({ serverError: error }));
