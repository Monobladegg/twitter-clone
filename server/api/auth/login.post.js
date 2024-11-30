import { getUserByUsernameOrEmail } from "~/server/db/users/getUserByUsernameOrEmail";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, username, password } = body;

  if ((!email && !username) || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  const user = await getUserByUsernameOrEmail(email, username);

  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "User not found" })
    );
  }

  const passwordisValid = bcrypt.compareSync(password, user.password);

  if (!passwordisValid) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Password incorrect" })
    );
  }

  // Generate Tokens

  // Access Token

  // Refresh Token
  const {accessToken, refreshToken} = generateTokens(user.id)

  return { user, passwordisValid, accessToken, refreshToken };
});
