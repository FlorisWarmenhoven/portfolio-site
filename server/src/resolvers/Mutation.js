import bcrypt from "bcryptjs";
import { authenticateUser } from "../utils/authenticateUser";
import { generateToken } from "../utils/generateToken";

const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    const { password, email } = args.data;
    const lowercaseEmail = args.data.email.toLowerCase();

    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long.");
    }

    const emailInUse = await prisma.exists.User({ email: lowercaseEmail });
    if (emailInUse) {
      throw new Error("Email is already in use.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.mutation.createUser({
      data: {
        ...args.data,
        email: lowercaseEmail,
        password: hashedPassword
      }
    });

    return {
      user,
      token: generateToken(user.id)
    };
  },
  deleteUser(parent, args, { prisma }, info) {
    return prisma.mutation.deleteUser({ where: { id: args.id } });
  },
  async createProject(parent, args, { prisma, request }, info) {
    authenticateUser(request);

    await prisma.mutation.createProject({
      data: {
        ...args.data,
        technologies: {
          connect: [...args.data.technologies]
        }
      }
    });
  },
  async login(parent, args, { prisma }, info) {
    const user = await prisma.query.user({
      where: {
        email: args.data.email.toLowerCase()
      }
    });

    if (!user) {
      throw new Error("Unable to login. Check your credentials.");
    }

    const passwordMatches = await bcrypt.compare(
      args.data.password,
      user.password
    );

    if (!passwordMatches) {
      throw new Error("Unable to login. Check your credentials.");
    }

    return {
      user,
      token: generateToken(user.id)
    };
  },
  async createTechnology(parent, args, { prisma, request }, info) {
    // authenticateUser(request);

    return await prisma.mutation.createTechnology(args);
  },

  deleteTechnology(parent, args, { prisma }, info) {
    return prisma.mutation.deleteTechnology({ where: { id: args.id } });
  }
};

export { Mutation as default };
