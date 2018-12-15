import { Prisma } from "prisma-binding";

export const prisma = new Prisma({
	typeDefs: "generated/prisma.graphql",
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: process.env.PRISMA_SECRET,
});
