import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { DataProxy } from "apollo-cache";

const DELETE_TECHNOLOGY = gql`
	mutation deleteTechnology($id: ID!) {
		deleteTechnology(id: $id) {
			id
			name
			iconUrl
		}
	}
`;

const GET_TECHNOLOGIES = gql`
	query getTechnologies {
		technologies {
			id
			name
			iconUrl
		}
	}
`;

interface Props {
	technology: {
		id: string;
		name: string;
		iconUrl: string;
	};
}

export default class TechnologyItem extends Component<Props> {
	handleDelete = async (e: any, deleteTechnology: Function, id: string) => {
		await deleteTechnology({ variables: { id } });
	}

	updateCache(cache: DataProxy, deleteTechnology: any) {
		// Retrieve current technologies stored in cache
		const { technologies } = cache.readQuery({
			query: GET_TECHNOLOGIES,
		});

		// Remove the deleted technology from the array of technologies
		const filteredTechnologies = technologies.filter(
			(technology: any) => technology.id !== deleteTechnology.id,
		);

		// Write the new 'up to date' array back to the cache.
		cache.writeQuery({
			query: GET_TECHNOLOGIES,
			data: { technologies: filteredTechnologies },
		});
	}

	render() {
		const { id, name, iconUrl } = this.props.technology;

		return (
			<Mutation
				mutation={DELETE_TECHNOLOGY}
				update={(cache, { data: { deleteTechnology } }) => {
					this.updateCache(cache, deleteTechnology);
				}}
			>
				{deleteTechnology => (
					<div>
						{name} - <img src={iconUrl} style={{ height: 20, width: "auto" }} />
						<button onClick={e => this.handleDelete(e, deleteTechnology, id)}>
							Delete
						</button>
						<br />
						<br />
					</div>
				)}
			</Mutation>
		);
	}
}
