import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import UserProfile from "./UserProfile";
import { Router, Route } from "react-router-dom";


const Index = () => {
	const { user, logout, isAuthenticated } = useMoralis();

	const onLogout = async () => {
		await logout();
	};

	useEffect(() => {
		if (!isAuthenticated) {
			window.location.pathname="/login";
		} else if (isAuthenticated && window.location.pathname === "/") {
			window.location.pathname="/UserProfile";
		}
	}, [isAuthenticated, window.location.pathname]);

	return (
		<>
			<div position="sticky">
				<div>
					<div>
						UserProfile
					</div>
					<button onClick={onLogout}>
						Logout
					</button>
				</div>
			</div>
			<main>
				<Router>
					<Route path="UserProfile">
						<UserProfile user={user} />
					</Route>
				</Router>
			</main>
		</>
	);
};

export default Index;
