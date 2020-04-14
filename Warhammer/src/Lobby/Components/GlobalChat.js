import React, { useState } from "react";

const GlobalChat = props => {
	const [inputValue, setInputValue] = useState("");
	const [gameChatEntries, setGameChat] = useState([]);
	return (
		<div className="box chat global-chat">
			<h1 className="box--title">Global Chat</h1>
			<div className="chat--user-inputs">	
				{gameChatEntries.map(value => (
					<p>{value}</p>
				))}
			</div>
			<label className="input">
				You say:{" "}
				<input
					name="global-chat-entry"
					type="string"
					value={inputValue}
					onChange={e => {
						setInputValue(e.target.value);
					}}
					onKeyDown={e => {
						if (e.key === "Enter" && e.target.value) {
							setGameChat([...gameChatEntries, inputValue]);
							setInputValue("");
						}
					}}
				/>
			</label>
		</div>
	);
};

export default GlobalChat;
