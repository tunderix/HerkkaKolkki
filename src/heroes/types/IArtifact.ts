/*
"sod.artifact.battleMachine.catapult": {
    "class": "special",
    "cost": 1000,
    "value": 0,
    "guard": 0,
    "untranslatedName": "Catapult",
    "slot": "",
    "bmUnit": "sod.unit.catapult"
},

"sod.artifact.sword.att5": {
    "class": "major",
    "value": -1,
    "untranslatedName": "Sword +5",
    "slot": "sword",
    "statBonus": { "ad": { "attack": 5 } }
},
*/

import IArtifactStats from './IArtifactStats.js';

export interface IArtifact {
    identifier: string;
    class: string;
    value: number;
    untranslatedName: string;
    slot: string;
    cost?: number;
    guard?: number;
    bmUnit?: string;
    statBonus?: IArtifactStats;
}

export interface ITranslatedArtifact {
    artifact: IArtifact;
    translatedDescription: string;
    translatedName: string;
}

export default IArtifact;