import prismaClient from "../prisma";

interface DeleteEmplooyeerProps {
  id: string;
}

class DeleteEmplooyeerService {
  async execute({ id }: DeleteEmplooyeerProps) {
    if (!id) {
      throw new Error("Solicitação invalida.");
    }
    const findEmplooyer = await prismaClient.emplooye.findFirst({
      where: {
        id: id,
      },
    });
    if (!findEmplooyer) {
      throw new Error("Cliente não existe.");
    }
    await prismaClient.emplooye.delete({
      where: {
        id: findEmplooyer.id,
      },
    });
    return { message: "Deletado com sucesso!" };
  }
}
export { DeleteEmplooyeerService };
