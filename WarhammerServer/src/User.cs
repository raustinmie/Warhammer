using System;

public class User{
    public User()
    {
        Guid m_userId = Guid.newGuid();
    }
    public IReadOnlyList<Army> Armies { get; set; }
    public Guid UserId = m_userId;
    public bool isLoggedIn { get; set; }

}