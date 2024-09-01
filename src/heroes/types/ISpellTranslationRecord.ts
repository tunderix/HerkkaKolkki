
/*
"sod.effect.deathCloud": {
    "pres": {
        "name": { "ts": { "en_US": "Death Cloud" } },
        "shortName": { "ts": { "en_US": "Death Cloud" } }
    }
},
*/
export interface ISpellTranslationRecord {
    pres: {
        name: {
            ts: {
                en_US: string;
            }
        };
        shortName: {
            ts: {
                en_US: string;
            }
        }
    }
}