import prismaClient from "../prisma";

class ListEmplooyeServices {
  async execute() {
    const emplooye = await prismaClient.emplooye.findMany();
    return emplooye;
  }
}

export { ListEmplooyeServices };
