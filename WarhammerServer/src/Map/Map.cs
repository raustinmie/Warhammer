using System;

public class Map{
    public Map(){
        Guid m_mapId = Guid.newGuid();
    }
    public Tuple<int: x, int:y> Size { get; set; }
    public IReadOnlyList<Terrain> TerrainList { get; set; }
    public IReadOnlyList<DeploymentZone> DeploymentZones { get; set; }
    public Guid MapId = m_mapId;
}