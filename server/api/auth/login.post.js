export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, username, password } = body;

  if ((!email && !username) || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  const user = getUserByUsernameOrEmail(email, username);

  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "User not found" })
    );
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid credentials" })
    );
  }
});
