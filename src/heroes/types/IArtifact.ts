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

export interface IArtifact {
    identifier: string;
    class: string;
    cost: number;
    value: number;
    guard: number;
    untranslatedName: string;
    slot: string;
    bmUnit: string;
}

export interface ITranslatedArtifact {
    artifact: IArtifact;
    translatedDescription: string;
    translatedName: string;
}

export default IArtifact;