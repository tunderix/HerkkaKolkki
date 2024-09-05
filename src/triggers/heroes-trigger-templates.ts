const HeroesTriggers = {
    triggers: ["commands"],
    artifactInfo: ["artifacts"],
    artifacts: ["artifacts", "all"],
    artifactsBySlot: ["artifacts", "slot", "*`SLOT_NAME`*"],
    artifactsByClass: ["artifacts", "class", "*`ARTIFACT_CLASS`*"],
    artifactByName: ["artifact", "*`ARTIFACT_NAME`*"],
    inventorySlots: ["artifact", "slots"],
    artifactClasses: ["artifact", "classes"],
    spellInfo: ["spells"],
    spellByName: ["spell", "*`SPELL_NAME`*"],
    spellsByMagicSchool: ["spells", "school", "*`MAGIC_SCHOOL`*"],
    spellsByMagicLevel: ["spells", "level", "*`MAGIC_LEVEL`*"],
    manaCostForSpell: ["/manacost", "*`SPELL_NAME`*"],
    terrainInfo: ["terrains"],
    terrains: ["terrains", "all"],
    terrainByName: ["terrain", "*`TERRAIN_NAME`*"],
    skillInfo: ["skills"],
    skills: ["skills", "list"],
    skillByName: ["skill", "*`SKILL_NAME`*"],
    unitInfo: ["units"],
    unitsByFaction: ["units", "faction", "*`FACTION_NAME`*"],
    unitByName: ["unit", "*`UNIT_NAME`*"],
    heroesInfo: ["heroes"],
    heroByName: ["hero", "*`HERO_NAME`*"],
    heroesBySpell: ["heroes", "spell", "*`SPELL_NAME`*"],
    heroesByFaction: ["heroes", "faction", "*`FACTION_NAME`*"],
    heroesBySkill: ["heroes", "skill", "*`SKILL_NAME`*"],
    factionInfo: ["factions"],
    factionByName: ["faction", "*`FACTION_NAME`*"],
}

export const uniqueFirstValues = Array.from(
    new Set(Object.values(HeroesTriggers).map(arr => arr[0]))
);

export default HeroesTriggers;