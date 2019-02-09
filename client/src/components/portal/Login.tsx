import React, { useState, FC } from "react";
import { Mutation } from "react-apollo";
import { Redirect, RouteComponentProps } from "react-router";
import { LOGIN_USER } from "../../graphql/mutations";
import styled from "../../../types/styled-components";

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
		props.history.push("/portal/dashboard");
	}

	if (localStorage.getItem("token")) {
		return <Redirect to="/portal/dashboard" />;
	}

	return (
		<Mutation mutation={LOGIN_USER}>
			{login => (
				<StyledLogin>
					<StyledForm onSubmit={e => handleLogin(e, login)}>
						<StyledInput
							type="text"
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<StyledInput
							type="password"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<StyledButton type="submit">submit</StyledButton>
					</StyledForm>
				</StyledLogin>
			)}
		</Mutation>
	);
};

const StyledLogin = styled.div`
	display: flex;
	justify-content: center;
	justify-items: center;
	align-items: center;
	height: 100vh;
	background-color: lightblue;
	flex-direction: column;
	width: 100%;
`;

const StyledForm = styled.form`
	width: 60%;
`;

const StyledInput = styled.input`
	display: flex;
	margin-bottom: 5px;
	height: 50px;
	font-size: 25px;
	border: none;
	border-radius: 10px;
	padding: 0px;
	text-align: center;
	width: 100%;
`;

const StyledButton = styled.button`
	width: 100%;
	height: 30px;
	font-size: 20px;
`;
