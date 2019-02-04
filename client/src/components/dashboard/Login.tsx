import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		login(data: { email: $email, password: $password }) {
			user {
				id
				name
			}
			token
		}
	}
`;

interface Props {
	history: [String];
}

export default class Login extends Component<Props> {
	email: HTMLInputElement;
	password: HTMLInputElement;

	handleLogin = async (e: any, login: any) => {
		e.preventDefault();
		const response = await login({
			variables: {
				email: this.email.value,
				password: this.password.value,
			},
		});
		await localStorage.setItem("token", response.data.login.token);
		this.props.history.push("/dashboard");
	}

	render() {
		return (
			<Mutation mutation={LOGIN_USER}>
				{login => (
					<div>
						<form onSubmit={e => this.handleLogin(e, login)}>
							<input
								type="text"
								placeholder="Email"
								ref={input => (this.email = input)}
							/>
							<input
								type="password"
								placeholder="Password"
								ref={input => (this.password = input)}
							/>
							<button type="submit">submit</button>
						</form>
					</div>
				)}
			</Mutation>
		);
	}
}
