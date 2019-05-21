import React, { FC } from "react";
import { useQuery } from "react-apollo-hooks";
import { IGetProjectsResponse, GET_PROJECTS } from "../../../graphql/queries";
import { ProjectList } from "./ProjectList";

export const ProjectPage: FC = () => {
	const { loading, data, error } = useQuery<IGetProjectsResponse>(GET_PROJECTS);
	if (loading) {
		return <div>Loading..</div>;
	}

	if (error) {
		return <div>Error: ${error.message}</div>;
	}

	if (data) {
		return <ProjectList projects={data.projects} />;
	}
};
