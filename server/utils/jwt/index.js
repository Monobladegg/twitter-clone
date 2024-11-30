import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {

  const config = useRuntimeConfig();
  return jwt.sign({userId: user.id}, config.jwtAccessSecret, { expiresIn: "999d" });
};

const generateRefreshToken = (user) => {

  const config = useRuntimeConfig();
  return jwt.sign({userId: user.id}, config.jwtRefreshSecret, { expiresIn: "999d" });
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken };
};