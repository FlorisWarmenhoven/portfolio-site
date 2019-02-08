import React, { Component, FC } from "react";
import { Mutation } from "react-apollo";
import { DataProxy } from "apollo-cache";
import { GET_TECHNOLOGIES } from "../../../graphql/queries";
import { DELETE_TECHNOLOGY } from "../../../graphql/mutations";

interface Props {
	technology: {
		id: string;
		name: string;
		iconUrl: string;
	};
}

export const TechnologyItem: FC<Props> = props => {
	const { id, name, iconUrl } = props.technology;

	function updateCache(cache: DataProxy, deleteTechnology: any) {
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

	function handleDelete(deleteTechnology: Function, id: string) {
		deleteTechnology({ variables: { id } });
	}

	return (
		<Mutation
			mutation={DELETE_TECHNOLOGY}
			update={(cache, { data: { deleteTechnology } }) => {
				updateCache(cache, deleteTechnology);
			}}
		>
			{deleteTechnology => (
				<div>
					{name} - <img src={iconUrl} style={{ height: 20, width: "auto" }} />
					<button onClick={e => handleDelete(deleteTechnology, id)}>
						Delete
					</button>
					<br />
					<br />
				</div>
			)}
		</Mutation>
	);
};
