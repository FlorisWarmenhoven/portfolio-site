import React, { Component, ChangeEvent } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_TECHNOLOGY = gql`
	mutation createTechnology($name: String!, $iconUrl: String!) {
		createTechnology(data: { name: $name, iconUrl: $iconUrl }) {
			id
			name
			iconUrl
		}
	}
`;

export default class AddTechnologyForm extends Component {
	state = {
		name: "",
		iconUrl: "",
	};

	handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleFormSubmit = (e: any, addTechnology: Function) => {
		const { name, iconUrl } = this.state;

		e.preventDefault();
		addTechnology({
			variables: { name, iconUrl },
		});
	}
	render() {
		return (
			<Mutation mutation={CREATE_TECHNOLOGY}>
				{addTechnology => (
					<form onSubmit={e => this.handleFormSubmit(e, addTechnology)}>
						<label>
							Name:
							<input
								type="text"
								name="name"
								onChange={this.handleInputChange}
							/>
						</label>
						<label>
							SVG URL:
							<input
								type="text"
								name="iconUrl"
								onChange={this.handleInputChange}
							/>
						</label>
						<input type="submit" value="Add" />
					</form>
				)}
			</Mutation>
		);
	}
}
