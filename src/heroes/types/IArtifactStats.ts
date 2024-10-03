// "statBonus": { "ad": { "attack": 1, "defense": 1 }, "magic": { "sp": 1, "int": 1 } }

interface IArtifactStats {
    attack: number;
    defense: number;
    spellpower: number;
    knowledge: number;
}

export default IArtifactStats;