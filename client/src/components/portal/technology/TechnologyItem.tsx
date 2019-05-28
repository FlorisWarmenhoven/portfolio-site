import React, { FC } from 'react';

interface IProps {
	technology: ITechnology;
	handleDelete: Function;
}

export const TechnologyItem: FC<IProps> = props => {
	const { id, name, iconUrl } = props.technology;

	return (
		<div>
			{name} - <img src={iconUrl} style={{ height: 20, width: 'auto' }} />
			<button onClick={() => props.handleDelete({ variables: { id } })}>
				Delete
			</button>
			<br />
			<br />
		</div>
	);
};
