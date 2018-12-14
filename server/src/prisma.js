import { Prisma } from "prisma-binding";

export const prisma = new Prisma({
	typeDefs: "src/generated/prisma.graphql",
	endpoint: process.env.PRISMA_ENDPOINT,
});
