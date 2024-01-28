import { Suspense } from "react";
import {
	BrowserRouter as Router,
	Switch,
	NavLink,
	Route,
	Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
	return (
		<Suspense fallback={<span> Loading ...</span>}>
			<Router>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React Logo" />
						<ul>
							{routes.map(({ to, name }) => (
								<li key={to}>
									<NavLink
										to={to}
										activeClassName="nav-active"
										exact
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					{/* A <Switch> looks through its children <Routes> and
            renders the first one that matches the current URL. */}
					<Switch>
						{routes.map((route) => (
							<Route key={route.to} path={route.to}>
								<route.Component />
							</Route>
						))}
						<Route
							path="/"
							render={() => <Redirect to={routes[0].to} />}
						/>
					</Switch>
				</div>
			</Router>
		</Suspense>
	);
};
