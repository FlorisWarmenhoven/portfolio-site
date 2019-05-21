import React, { FC } from "react";
import { TechnologyList } from "./TechnologyList";
import { CreateTechnology } from "./CreateTechnology";
import { GET_TECHNOLOGIES } from "../../../graphql/queries";
import {
	DELETE_TECHNOLOGY,
	CREATE_TECHNOLOGY,
	ICreateTechnologyResponse,
	IDeleteTechnologyResponse
} from "../../../graphql/mutations";
import { DataProxy } from "apollo-cache";
import { useMutation, useQuery } from "react-apollo-hooks";

export const TechnologyPage: FC = () => {
	function updateCacheOnDelete(
		cache: DataProxy,
		deletedTechnology: ITechnology
	) {
		// Retrieve current technologies stored in cache
		const { technologies } = cache.readQuery({
			query: GET_TECHNOLOGIES
		});

		// Remove the deleted technology from the array of technologies
		const filteredTechnologies = technologies.filter(
			(technology: ITechnology) => technology.id !== deletedTechnology.id
		);

		// Write the new 'up to date' array back to the cache.
		cache.writeQuery({
			query: GET_TECHNOLOGIES,
			data: { technologies: filteredTechnologies }
		});
	}

	function updateCacheOnCreate(
		cache: DataProxy,
		createdTechnology: ITechnology
	) {
		const { technologies } = cache.readQuery({ query: GET_TECHNOLOGIES });

		cache.writeQuery({
			query: GET_TECHNOLOGIES,
			data: { technologies: technologies.concat([createdTechnology]) }
		});
	}

	const createTechnologyMutation = useMutation<ICreateTechnologyResponse>(
		CREATE_TECHNOLOGY,
		{
			update: (proxy, { data }) => {
				updateCacheOnCreate(proxy, data.createTechnology);
			}
		}
	);

	const deleteTechnologyMutation = useMutation<IDeleteTechnologyResponse>(
		DELETE_TECHNOLOGY,
		{
			update: (proxy, { data }) => {
				updateCacheOnDelete(proxy, data.deleteTechnology);
			}
		}
	);

	const { loading, error, data } = useQuery(GET_TECHNOLOGIES);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>`Error! ${error.message}`</div>;

	return (
		<div>
			<TechnologyList
				technologies={data.technologies}
				handleDelete={deleteTechnologyMutation}
			/>
			<CreateTechnology handleCreate={createTechnologyMutation} />
		</div>
	);
};
