import React, { FC } from "react";
import { ProjectList } from "./ProjectList";
import { CreateProject } from "./CreateProject";
import { Query, Mutation } from "react-apollo";
import { GET_TECHNOLOGIES } from "../../../graphql/queries";
import {
	DELETE_TECHNOLOGY,
	CREATE_TECHNOLOGY,
} from "../../../graphql/mutations";
import { DataProxy } from "apollo-cache";

interface Props {}

export const ProjectPage: FC<Props> = props => {
	function updateCacheOnDelete(
		cache: DataProxy,
		deletedTechnology: Technology,
	) {
		// Retrieve current technologies stored in cache
		const { technologies } = cache.readQuery({
			query: GET_TECHNOLOGIES,
		});

		// Remove the deleted technology from the array of technologies
		const filteredTechnologies = technologies.filter(
			(technology: any) => technology.id !== deletedTechnology.id,
		);

		// Write the new 'up to date' array back to the cache.
		cache.writeQuery({
			query: GET_TECHNOLOGIES,
			data: { technologies: filteredTechnologies },
		});
	}

	function updateCacheOnCreate(
		cache: DataProxy,
		createdTechnology: Technology,
	) {
		const { technologies } = cache.readQuery({ query: GET_TECHNOLOGIES });

		cache.writeQuery({
			query: GET_TECHNOLOGIES,
			data: { technologies: technologies.concat([createdTechnology]) },
		});
	}

	return (
		<Mutation
			mutation={CREATE_TECHNOLOGY}
			update={(cache, { data: { createTechnology } }) => {
				updateCacheOnCreate(cache, createTechnology);
			}}
		>
			{createTechnology => (
				<Mutation
					mutation={DELETE_TECHNOLOGY}
					update={(cache, { data: { deleteTechnology } }) => {
						updateCacheOnDelete(cache, deleteTechnology);
					}}
				>
					{deleteTechnology => (
						<Query query={GET_TECHNOLOGIES}>
							{({ loading, error, data: { technologies } }) => {
								if (loading) return "Loading...";
								if (error) return `Error! ${error.message}`;

								return (
									<div>
										{/* <ProjectList
											technologies={technologies}
											handleDelete={deleteTechnology}
										/> */}
										<CreateProject handleCreate={createTechnology} />
									</div>
								);
							}}
						</Query>
					)}
				</Mutation>
			)}
		</Mutation>
	);
};
