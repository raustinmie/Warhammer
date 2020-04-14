import React, { useState } from "react";
// import Game from "Game.js";

const GameSettings = createGame => {
	let numberOfPlayers = 4;
	let password = "";
	const { inputValue, setInputValue } = useState("");
	return (
		<div className="box game-settings middle-row-box">
			<h1 className="box--title">Game Settings</h1>
				A bunch of settings
			<button id="create-game" className="input" onClick={createGame}>
				Create Game
			</button>
		</div>
	);
};
export default GameSettings;
