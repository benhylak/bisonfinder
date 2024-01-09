// Import Prisma and bcrypt for password hashing
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Add a new field for user roles
async function registerUser(username, password, role) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      username: username,
      password: hashedPassword,
      role: role,
    },
  });
  return newUser;
}

async function loginUser(username, password) {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { user, token };
}

module.exports = {
  registerUser,
  loginUser,
};
