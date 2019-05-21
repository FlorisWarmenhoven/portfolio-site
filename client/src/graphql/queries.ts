import gql from "graphql-tag";

export const GET_TECHNOLOGIES = gql`
	query getTechnologies {
		technologies {
			id
			name
			iconUrl
		}
	}
`;

export const GET_PROJECTS = gql`
	query getProjects {
		projects {
			id
			title
			description
			githubUrl
			imageUrl
			technologies {
				id
				name
				iconUrl
			}
		}
	}
`;

export interface IGetProjectsResponse {
	projects: IProject[];
}
