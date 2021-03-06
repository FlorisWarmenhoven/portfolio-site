import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Portfolio } from './components/portfolio/Portfolio';
import { PrivateRoute } from './components/shared/PrivateRoute';
import { Portal } from './components/portal/Portal';
import { Login } from './components/portal/Login';
import { Work } from './components/portfolio/work/Work';

export const Routes: FC = () => {
	return (
		<>
			<Switch>
				<Route path="/work" component={Work} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute path="/portal" component={Portal} />
				<Route component={Portfolio} />
			</Switch>
		</>
	);
};
