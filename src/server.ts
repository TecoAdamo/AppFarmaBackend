import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  console.error("Erro no servidor Fastify:", error);
  reply.code(500).send({ message: "Erro interno no servidor" });
});

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
  } catch (error) {
    process.exit(1);
  }
};

start();
