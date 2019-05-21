import React, { FC } from "react";
import styled from "../../../../types/styled-components";
import { Link } from "react-router-dom";

interface IProps {
	project: IProject;
}

export const ProjectItem: FC<IProps> = props => {
	const { project } = props;
	if (project) {
		return (
			<li>
				{project.title} - <StyledImage src={project.technologies[0].iconUrl} />{" "}
				- <Link to={`/portal/projects/${project.id}/edit`}>Edit</Link>
			</li>
		);
	}
};

const StyledImage = styled.img`
	height: 50px;
	width: auto;
`;
