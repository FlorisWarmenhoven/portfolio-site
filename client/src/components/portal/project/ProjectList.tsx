import React, { FC } from 'react';
import { ProjectItem } from './ProjectItem';

interface IProps {
	projects: IProject[];
}

export const ProjectList: FC<IProps> = props => {
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
