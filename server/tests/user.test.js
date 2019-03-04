import "@babel/polyfill";
import ApolloBoost, { gql } from "apollo-boost";

import { prisma } from "../src/prisma";

// TODO: Use env file for uri
const client = new ApolloBoost({
	uri: "http://localhost:8001"
});

beforeEach(async () => {
	await prisma.mutation.deleteManyUsers();
	await prisma.mutation.deleteManyProjects();
});

test("should create a new user", async () => {
	const createUser = gql`
		mutation {
			createUser(
				data: {
					name: "Floris"
					email: "floris@example.com"
					password: "potatoes"
				}
			) {
				token
				user {
					id
				}
			}
		}
	`;

	const response = await client.mutate({ mutation: createUser });
	const exists = await prisma.exists.User({
		id: response.data.createUser.user.id
	});

	expect(exists).toBe(true);
});
