import React, { useState } from "react";
import { useMoralis } from "react-moralis";



const SignUp = () => {
	const { signup } = useMoralis();
	const [values, setValues] = useState({
		username: "",
		password: "",
		email: "",
	});

	const onSignUp = async ({ username, password, email }) => {
		try {
			await signup(username, password, email);
		} catch (e) {
			console.error(e);
			// throw error snackbar
		}
	};

	return (
		<div>
			<h1>Sign Up</h1>

			<form
				onSubmit={async (e) => {
					e.preventDefault();
					await onSignUp(values);
				}}
			>
				<textarea
					placeholder="Email"
					type="email"
					value={values.email}
					required
					onChange={(e) => setValues({ ...values, email: e.target.value })}
				/>
				<textarea
					placeholder="Username"
					type="text"
					value={values.username}
					required
					onChange={(e) =>
						setValues({ ...values, username: e.target.value })
					}
				/>
				<textarea
					placeholder="Password"
					type="password"
					required
					value={values.password}
					onChange={(e) =>
						setValues({ ...values, password: e.target.value })
					}
				/>
				<link href="/login">Have an account?</link>
				<button type="submit">
					Create New Account
				</button>
			</form>
		</div>
	);
};

export default SignUp;
