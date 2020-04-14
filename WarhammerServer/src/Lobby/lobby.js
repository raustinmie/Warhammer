const gameChat = document.querySelector(".game-chat>div");
const globalChat = document.querySelector(".global-chat>div");
const globalChatEntry = document.getElementsByName("global-chat-entry")[0];
const gameChatEntry = document.getElementsByName("game-chat-entry")[0];

//After Signing in
let socket = openWebsocket();
socket.addEventListener("open", function(event) {
	console.log("socket opened");
	socket.send(JSON.stringify({ welcome: "client connected" }));
});

function openWebsocket() {
	const baseUri = document.baseURI;
	const wsUri = baseUri.replace(/http/, "ws");

	console.log(`Websocket URI: ${wsUri}`);
	return new WebSocket(wsUri);
}

function onEnter(input, box) {
	input.addEventListener("keydown", event => {
		if (event.keyCode === 13) {
			takeInputs(input, box);
		}
	});
	box.scrollTop = box.scrollHeight;
}

onEnter(globalChatEntry, globalChat);
onEnter(gameChatEntry, gameChat);

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function takeInputs(input, box) {
	if (box !== "" || box !== null) {
		box.innerHTML += `<p>${escapeHtml(input.value)}</p>`;
		//		box.appendChild(input.cloneNode(false));
		input.value = "";
	}
}

let games = [];

function createGame() {
	const locations = document.getElementsByName("locations");
	const gameName = document.getElementsByName("game-name");
	const password = document.getElementsByName("password");
	const numberOfPlayers = document.getElementsByName("number-of-players");
	const pendingGames = document.getElementById("pending-games");

	games.push(
		new Game(
			locations,
			"player creating game",
			gameName,
			password,
			numberOfPlayers
		)
	);
	pendingGames.appendChild(gameName.cloneNode(false));
	// TODO: hide create game window and join game buttons, show game chat window
}

function attemptJoinGame(game) {
	if (!game.password || password === game.password) {
		game.joinGame(player);
	}
}

class Game {
	constructor(locations, players, gameName, password, maxPlayers) {
		this._locations = locations;
		this._players = players;
		this._gameName = gameName;
		this._password = password;
		this._maxPlayers = maxPlayers;
	}

	joinGame(player) {
		this._players.push(player);
	}

	get locations() {
		return this._locations;
	}

	get maxPlayers() {
		return this._maxPlayers;
	}

	get gameName() {
		return this._gameName;
	}

	get password() {
		return this._password;
	}

	get players() {
		return this._players;
	}
}
