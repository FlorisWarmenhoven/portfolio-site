import React, { FC } from "react";
import { useQuery } from "react-apollo-hooks";
import { GetProjectsResponse, GET_PROJECTS } from "../../../graphql/queries";
import { ProjectList } from "./ProjectList";
interface Props {}

export const ProjectPage: FC<Props> = props => {
	const { loading, data, error } = useQuery<GetProjectsResponse>(GET_PROJECTS);
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
