import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { TechnologyItem } from "./TechnologyItem";

const GET_TECHNOLOGIES = gql`
	{
		technologies {
			id
			name
			iconUrl
		}
	}
`;

export default class TechnologyList extends Component {
	render() {
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
	}
}
