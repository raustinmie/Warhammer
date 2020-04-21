public class Army{
    public Army(){
    }
        public IReadOnlyList<Unit> Units { get; set; }
        public Character General { get; set;}
        public Character BattleStandardBearer { get; set; }
        public IReadOnlyList<Character> OtherCharacters { get; set; }
}