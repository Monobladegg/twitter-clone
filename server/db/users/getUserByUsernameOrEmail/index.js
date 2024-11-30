import { prisma } from "../..";

export const getUserByUsernameOrEmail = (email, username) => {
  return prisma.user.findFirst({
    where: {
      OR: [
        { username: username },
        { email: email }
      ]
    },
  });
};
