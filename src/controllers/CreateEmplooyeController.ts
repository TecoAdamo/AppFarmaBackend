import { FastifyRequest, FastifyReply } from "fastify";
import { CreateEmplooyeService } from "../services/CreateEmplooyeServices";

class CreateEmplooyeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, cpf, activationDate, inactivationDate, status } =
      request.body as {
        name: string;
        cpf: string;
        activationDate: Date;
        inactivationDate: Date;
        status: boolean;
      };

    const emplooyeService = new CreateEmplooyeService();

    const emplooyer = await emplooyeService.execute({
      name,
      cpf,
      activationDate,
      inactivationDate,
      status,
    });
    reply.send(emplooyer);
  }
}

export { CreateEmplooyeController };
