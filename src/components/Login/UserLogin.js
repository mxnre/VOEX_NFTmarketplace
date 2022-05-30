import React from "react";
import { useMoralis } from "react-moralis";
import Login from "./pages/Authentication/index";
import UserProfile from "./pages/UserProfile/index";

const UserLogin = () => {
	const { isAuthenticated } = useMoralis();
	if (isAuthenticated) {
		return (
			<>
				<UserProfile />
			</>
		);
	}
	else {
		return (
			<>
				<Login />
			</>
		);
	}

};

export default UserLogin;
