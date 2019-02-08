import React, { FC } from "react";
import { Query } from "react-apollo";
import { TechnologyItem } from "./TechnologyItem";
import { GET_TECHNOLOGIES } from "../../../graphql/queries";

interface Props {}

export const TechnologyList: FC<Props> = props => {
	return (
		<Query query={GET_TECHNOLOGIES}>
			{({ loading, error, data }) => {
				if (loading) return "Loading...";
				if (error) return `Error! ${error.message}`;

				return (
					<div>
						{data.technologies.map((technology: any) => (
							<div key={technology.id}>
								<TechnologyItem technology={technology} />
							</div>
						))}
					</div>
				);
			}}
		</Query>
	);
};
