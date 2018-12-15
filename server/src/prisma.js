import { Prisma } from "prisma-binding";
const pathToGraphql = process.env.PRODUCTION
	? "server/src/generated/prisma.graphql"
	: "src/generated/prisma.graphql";

export const prisma = new Prisma({
	typeDefs: pathToGraphql,
	endpoint: process.env.PRISMA_ENDPOINT,
	secret: process.env.PRISMA_SECRET,
});
