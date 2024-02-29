import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  await app.register(cors, {
    origin: "*", // ou especifique as origens permitidas
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
  });
  await app.register(routes);

  try {
    await app.listen({ port: 3333, host: "0.0.0.0" });
  } catch (error) {
    process.exit(1);
  }
};

start();