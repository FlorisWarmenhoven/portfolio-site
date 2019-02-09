import React, { FC } from "react";
import { TechnologyItem } from "./TechnologyItem";

interface Props {
	technologies: Technology[];
	handleDelete: Function;
}

export const TechnologyList: FC<Props> = props => {
	return (
		<div>
			{props.technologies.map((technology: any) => (
				<div key={technology.id}>
					<TechnologyItem
						technology={technology}
						handleDelete={props.handleDelete}
					/>
				</div>
			))}
		</div>
	);
};
