import React, { FC } from 'react';
import { TechnologyItem } from './TechnologyItem';

interface IProps {
	technologies: ITechnology[];
	handleDelete: Function;
}

export const TechnologyList: FC<IProps> = props => {
	return (
		<div>
			{props.technologies.map((technology: ITechnology) => (
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
