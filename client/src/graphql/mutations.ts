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

export const CREATE_TECHNOLOGY = gql`
	mutation createTechnology($name: String!, $iconUrl: String!) {
		createTechnology(data: { name: $name, iconUrl: $iconUrl }) {
			id
			name
			iconUrl
		}
	}
`;
