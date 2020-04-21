using System.Collection.Generic;
using Utility;

namespace Lobby
{
    public class LobbyViewModel
    {
        public IReadOnlyList<ChatMessage> globalChat{ get; set; }
        public IReadOnlyList<PendingGame> pendingGames { get; set; }
        public IReadOnlyList<User> playerList { get; set; }
        public GameSettings gameSettings{ get; set; }
    }
}