import React, { useState, FC } from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { useMutation } from 'react-apollo-hooks';
import { LOGIN_USER, ILoginUserResponse } from '../../graphql/mutations';
import styled from '../../../types/styled-components';

export const Login: FC<RouteComponentProps> = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const loginMutation = useMutation<ILoginUserResponse>(LOGIN_USER, {
		variables: {
			email,
			password
		}
	});

	const handleLogin = async (e: React.FormEvent) => {
		try {
			e.preventDefault();
			const response = await loginMutation();

			await localStorage.setItem('token', response.data.login.token);
			props.history.push('/portal/dashboard');
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	if (localStorage.getItem('token')) {
		return <Redirect to="/portal/dashboard" />;
	}

	return (
		<StyledLogin>
			{errorMessage}
			<StyledForm onSubmit={e => handleLogin(e)}>
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
				<StyledButton type="submit">Login</StyledButton>
			</StyledForm>
		</StyledLogin>
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
