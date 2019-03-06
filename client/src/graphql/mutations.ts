import gql from "graphql-tag";

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		login(data: { email: $email, password: $password }) {
			user {
				id
				name
			}
			token
		}
	}
`;

export type LoginUserResponse = {
	login: {
		user: {
			id: string;
			name: string;
		};
		token: string;
	};
};

export const CREATE_TECHNOLOGY = gql`
	mutation createTechnology($name: String!, $iconUrl: String!) {
		createTechnology(data: { name: $name, iconUrl: $iconUrl }) {
			id
			name
			iconUrl
		}
	}
`;

export type createTechnologyResponse = {
	createTechnology: Technology;
};

export const DELETE_TECHNOLOGY = gql`
	mutation deleteTechnology($id: ID!) {
		deleteTechnology(id: $id) {
			id
			name
			iconUrl
		}
	}
`;

export type deleteTechnologyResponse = {
	deleteTechnology: Technology;
};
