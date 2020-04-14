import React, {useState} from "react";
import { GoogleLoginComponent } from "./GoogleOAuth2.js";

export const TopRow = () => {
const [user, setUser] = useState(null);

	return (
		<div className="top-row">
			<p className="signed-in-as-notification">You are signed in as {user}</p>
				<></>
			<div className="login-button"><GoogleLoginComponent/></div>
		</div>
	);
};
