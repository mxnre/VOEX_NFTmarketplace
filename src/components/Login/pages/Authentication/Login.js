import React, { useState } from "react";
import { useMoralis } from "react-moralis";



const Login = () => {
	const { authenticate, login } = useMoralis();
	const [values, setValues] = useState({
		username: "",
		password: "",
	});

	const onLogin = async () => {
		await authenticate();
	};

	const onNonCryptoLogin = async ({ username, password }) => {
		const res = await login(username, password);

		// If no existing user found, create new one
		if (!res) {
			// throw error snackbar
			console.error("No user found");
		} else {
			window.location.pathname="/";
		}
	};

	return (
		<div>

			<h1>Log In</h1>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					await onNonCryptoLogin(values);
				}}
			>
				<textarea
					variant="outlined"
					placeholder="Username"
					value={values.username}
					required
					fullWidth
					onChange={(e) =>
						setValues({ ...values, username: e.target.value })
					}
				/>
				<textarea
					variant="outlined"
					placeholder="Password"
					type="password"
					required
					value={values.password}
					fullWidth
					onChange={(e) =>
						setValues({ ...values, password: e.target.value })
					}
				/>
				<link href="/forgot-password">Forgot Password?</link>
				<link href="/signup">Have no account yet?</link>
				<button
					variant="outlined"
					fullWidth
					type="submit"
				>
					Login
				</button>
			</form>

		</div>
	);
};

export default Login;
