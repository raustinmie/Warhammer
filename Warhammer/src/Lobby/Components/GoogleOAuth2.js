import React, { useState } from "react";

import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

const responseGoogle = response => {
	console.log(response);
};
export function GoogleLoginComponent() {
	const [loggedIn, setLoggedIn] = useState(false);
	if (loggedIn) {
		return (
			<GoogleLogout
				clientId="620866130313-jtk0jkn0dfoqbhbcvhmqpga73mae26v7.apps.googleusercontent.com"
				buttonText="Logout"
				onLogoutSuccess={() => {
					setLoggedIn(false);
				}}
			></GoogleLogout>
		);
	}
	return (
		<div className="login-button">
		<GoogleLogin
			clientId="620866130313-jtk0jkn0dfoqbhbcvhmqpga73mae26v7.apps.googleusercontent.com"
			buttonText="Login"
			onSuccess={() => {
				setLoggedIn(true);
			}}
			onFailure={responseGoogle}
			cookiePolicy={"single_host_origin"}
		/>
		</div>
	);
}
