/*
"sod.artifact.battleMachine.catapult": {
    "class": "special",
    "cost": 1000,
    "value": 0,
    "guard": 0,
    "untranslatedName": "Catapult",
    "slot": "",
    "bmUnit": "sod.unit.catapult"
},*/

export default interface IArtifact {
    identifier: string;
    class: string;
    cost: number;
    value: number;
    guard: number;
    translatedDescription: string;
    untranslatedName: string;
    translatedName: string;
    slot: string;
    bmUnit: string;
}
