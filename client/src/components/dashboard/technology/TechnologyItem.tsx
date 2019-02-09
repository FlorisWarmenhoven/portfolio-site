import React, { FC } from "react";

interface Props {
	technology: Technology;
	handleDelete: any;
}

export const TechnologyItem: FC<Props> = props => {
	const { id, name, iconUrl } = props.technology;

	return (
		<div>
			{name} - <img src={iconUrl} style={{ height: 20, width: "auto" }} />
			<button onClick={() => props.handleDelete({ variables: { id } })}>
				Delete
			</button>
			<br />
			<br />
		</div>
	);
};
