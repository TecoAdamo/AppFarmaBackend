import { FastifyRequest, FastifyReply } from "fastify";
import { ListEmplooyeServices } from "../services/ListEmplooyeServices";

class ListEmplooyeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listEmplooyeServices = new ListEmplooyeServices();

    const emplooye = await listEmplooyeServices.execute();

    reply.send(emplooye);
  }
}

export { ListEmplooyeController };
