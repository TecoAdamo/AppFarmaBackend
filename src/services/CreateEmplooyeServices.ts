import prismaClient from "../prisma";
import { parse, isValid } from "date-fns"; // Adicione a importação aqui

interface CreateEmplooyeProps {
  name: string;
  cpf: string;
  activationDate: string;
  inactivationDate: string | null;
  status: boolean;
}

class CreateEmplooyeService {
  async execute({
    name,
    cpf,
    activationDate,
    inactivationDate,
    status,
  }: CreateEmplooyeProps) {
    if (!name || !cpf || !activationDate || status === undefined) {
      throw new Error("Preencha todos os campos obrigatórios");
    }

    // Converta as datas para o formato desejado
    const formattedActivationDate = this.parseAndFormatDate(activationDate);
    const formattedInactivationDate = inactivationDate
      ? this.parseAndFormatDate(inactivationDate)
      : null;

    try {
      const emplooye = await prismaClient.emplooye.create({
        data: {
          name,
          cpf,
          activationDate: formattedActivationDate,
          inactivationDate: formattedInactivationDate,
          status: status, // Use o valor passado como argumento
        },
      });

      return emplooye;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao criar emplooye");
    }
  }

  private parseAndFormatDate(dateString: string): Date | null {
    const parsedDate = parse(dateString, "yyyy-MM-dd", new Date());

    if (!isValid(parsedDate)) {
      console.error(`Erro na conversão da data: ${dateString}`);
      return null;
    }

    return parsedDate;
  }
}

export { CreateEmplooyeService };
