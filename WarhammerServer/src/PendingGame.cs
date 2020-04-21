using System;

public class PendingGame{
    public Game(User creator)
    {
        m_gameId = Guid.newGuid()
        m_creator = m_creator;
    }
    public Map map { get; set; }
    public User Creator = m_creator;
    public Guid GameId = m_gameId;
}