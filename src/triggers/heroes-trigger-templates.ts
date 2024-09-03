const HeroesTriggers = {
    artifactInfo: ["artifacts"],
    artifacts: ["artifacts", "all"],
    artifactsBySlot: ["artifacts", "slot", "*`SLOT_NAME`*"],
    artifactsByClass: ["artifacts", "class", "*`ARTIFACT_CLASS`*"],
    artifactByName: ["artifact", "*`ARTIFACT_NAME`*"],
    inventorySlots: ["artifact", "slots"],
    artifactClasses: ["artifact", "classes"],
}

export default HeroesTriggers;