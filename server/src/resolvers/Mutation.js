import bcrypt from "bcryptjs";

const Mutation = {
	async createUser(parent, args, { prisma }, info) {
		const { password } = args.data;

		if (password.length < 8) {
			throw new Error("Password must be at least 8 characters long.");
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		console.log("args:", args.data);
		return prisma.mutation.createUser(
			{
				data: {
					...args.data,
					password: hashedPassword,
				},
			},
			info
		);
	},
	deleteUser(parent, args, { prisma }, info) {
		return prisma.mutation.deleteUser({ where: { id: args.id } });
	},
	async createProject(parent, args, { prisma }, info) {
		const response = await prisma.mutation.createProject(args);
		return response;
	},
};

export { Mutation as default };
