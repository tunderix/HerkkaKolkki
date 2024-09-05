const HeroesTriggers = {
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
    spellInfos: [""],
}

export default HeroesTriggers;