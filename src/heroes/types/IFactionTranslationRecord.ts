/*
"hota.faction.cove": {
    "mageClass": { "pres": { "name": { "ts": { "en_US": "Navigator" } } } },
    "warriorClass": { "pres": { "name": { "ts": { "en_US": "Captain" } } } }
}
*/
export interface IFactionTranslationRecord {
    mageClass: {
        pres: {
            name: {
                ts: {
                    en_US: string;
                }
            }
        }
    };
    warriorClass: {
        pres: {
            name: {
                ts: {
                    en_US: string;
                }
            }
        }
    };
}
