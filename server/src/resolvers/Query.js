const Query = {
	async users(parent, args, { prisma }, info) {
		const response = await prisma.query.users(null, info);

		return response;
	},
	async projects(parent, args, { prisma }, info) {
		const response = await prisma.query.projects(null, info);

		return response;
	},
	async technologies(parent, args, { prisma }, info) {
		const response = await prisma.query.technologies(null, info);

		return response;
	},
};

export { Query as default };
