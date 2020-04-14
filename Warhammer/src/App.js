import React from "react";
import "./App.css";
import { TopRow } from "./Lobby/Components/TopRow.js";
import PendingGames from "./Lobby/Components/PendingGames";
import GameSettings from "./Lobby/Components/GameSettings";
import GameChat from "./Lobby/Components/GameChat.js";
import GlobalChat from "./Lobby/Components/GlobalChat.js";

function App() {
createGame(){
	new Game
}

	return (
		<div className="App">
			<header className="App-header">
				<div id="lobby">
					<TopRow />
					<div className="middle-row">
						<PendingGames/>
						<GameChat/>
						<GameSettings createGame={createGame}/>
					</div>
					<GlobalChat />
				</div>
			</header>
		</div>
	);
}

export default App;
