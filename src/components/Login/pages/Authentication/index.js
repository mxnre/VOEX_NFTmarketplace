import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {Router, Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

const Index = () => {
	const { isAuthenticated } = useMoralis();

	useEffect(() => {
		if (isAuthenticated) {
			window.location.pathname="/UserProfile";
		} else if (!isAuthenticated && window.location.pathname === "/") {
			window.location.pathname="/login";
		}
	}, [isAuthenticated, window.location.pathname]);

	return (
		<Router>
			<Route path="login">
				<Login />
			</Route>
			<Route path="signup">
				<SignUp />
			</Route>
			<Route path="forgot-password">
				<ForgotPassword />
			</Route>
		</Router>
	);
};

export default Index;
