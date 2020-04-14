namespace Rulebook
    { public class Regiment{
        public string name { get; set; }
        public int size { get; set; }
        public List<Equipment> equipment {get; set; }
        public List<SpecialRules> SpecialRules {get; set;}
        public bool isFleeing { get; set; }
        public Tuple<(int x, int y)> location { get; set; }
        public bool flyer { get; set; }
        public int direction { get; set; }
    }
}