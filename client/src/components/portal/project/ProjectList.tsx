import React, { FC } from "react";
import { ProjectItem } from "./ProjectItem";

interface Props {
	projects: Project[];
}

export const ProjectList: FC<Props> = props => {
	if (props.projects.length > 0) {
		return (
			<>
				{props.projects.map(project => (
					<ProjectItem key={project.id} project={project} />
				))}
			</>
		);
	}
};
