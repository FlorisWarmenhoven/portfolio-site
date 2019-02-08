import React, { useState, FC } from "react";
import { Mutation } from "react-apollo";
import { Redirect, RouteComponentProps } from "react-router";
import { LOGIN_USER } from "../../graphql/mutations";

interface Props extends RouteComponentProps {}

export const Login: FC<Props> = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleLogin(e: any, login: any) {
		e.preventDefault();

		const response = await login({
			variables: {
				email,
				password,
			},
		});

		await localStorage.setItem("token", response.data.login.token);
		props.history.push("/dashboard");
	}

	if (localStorage.getItem("token")) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<Mutation mutation={LOGIN_USER}>
			{login => (
				<div>
					<form onSubmit={e => handleLogin(e, login)}>
						<input
							type="text"
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<button type="submit">submit</button>
					</form>
				</div>
			)}
		</Mutation>
	);
};
