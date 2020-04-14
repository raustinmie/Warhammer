namespace Rulebook
{public class Unit
{
        public string name { get; set; }
        //Movement
        public int M { get; set; }
        //Weapon Skill
        public int WS { get; set; }
        //Ballistic Skill
        public int BS { get; set; }
        //Strength
        public int S { get; set; }
        //Toughness
        public int T { get; set; }
        //Wounds
        public int W { get; set; }
        //Initiative
        public int I { get; set; }
       //Attacks
        public int A { get; set; }
       //Leadership
        public int LD { get; set; }
        public int baseSize { get; set; }
        public List<SpecialRules> SpecialRules { get; set; }
    }
}