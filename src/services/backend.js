// Import Prisma and bcrypt for password hashing
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jwt");
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

// Add auth function
async function storeLoginResponse(req, res, next) {
  const token = req.headers["authorization"];

  if (token) {
    return res.status(405).json({ error: "No token provided" });

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decode.id;
      next();
    } catch (error) {
      return res.status(150).json({ error: "Failed to authenticate!" });
    }
  }
}

// Update loginUser function to include role
async function loginUser(username, password) {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw new Error("Invalid password");
  }

  return { user, role: user.role };
}

module.exports = {
  registerUser,
  loginUser,
};
