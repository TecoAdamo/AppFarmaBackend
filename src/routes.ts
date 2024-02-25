import {
  FastifyReply,
  FastifyRequest,
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";

import { CreateEmplooyeController } from "./controllers/CreateEmplooyeController";
import { ListEmplooyeController } from "./controllers/ListEmplooyeController";
import { DeleteEmplooyeerController } from "./controllers/DeleteEmplooyerController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/emplooye",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateEmplooyeController().handle(request, reply);
    }
  );
  fastify.get(
    "/emplooyers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListEmplooyeController().handle(request, reply);
    }
  );
  fastify.delete(
    "/emplooyer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteEmplooyeerController().handle(request, reply);
    }
  );
}
