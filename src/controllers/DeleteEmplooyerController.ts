import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteEmplooyeerService } from "../services/DeleteEmplooyerServices";

class DeleteEmplooyeerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const emplooyerService = new DeleteEmplooyeerService();

    const emplooyer = await emplooyerService.execute({ id });
    reply.send(emplooyer);
  }
}
export { DeleteEmplooyeerController };
