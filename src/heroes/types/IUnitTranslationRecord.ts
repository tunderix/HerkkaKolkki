
/*
"hota.unit.assid": {
    "pres": {
        "name": { "ts": { "en_US": "Ayssid" } },
        "namePlural": { "ts": { "en_US": "Ayssid" } }
    }
},
*/
export interface IUnitTranslationRecord {
    pres: {
        name:{
            ts: {
                en_US: string;
            }
        };
        namePlural: {
            ts: {
                en_US: string;
            }
        }
    }
}