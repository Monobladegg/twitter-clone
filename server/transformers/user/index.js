export const userTransformer = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  username: user.username,
  profileImage: user.profileImage,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});