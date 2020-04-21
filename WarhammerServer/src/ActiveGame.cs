public class ActiveGame{
    public ActiveGame(User player1, User player2, Map map){
    m_player1 = player1;
    m_player2 = player2;
    m_map = map;
    }
    public User ActivePlayer { get; set; }
    public TurnPhase TurnPhase { get; set; }
}