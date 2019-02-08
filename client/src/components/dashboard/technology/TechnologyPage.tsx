import React, { FC } from "react";
import { TechnologyList } from "./TechnologyList";
import { AddTechnology } from "./AddTechnology";

interface Props {}
export const TechnologyPage: FC<Props> = props => {
	return (
		<div>
			<TechnologyList />
			<AddTechnology />
		</div>
	);
};
