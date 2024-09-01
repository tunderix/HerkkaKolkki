/*
"hota.skill.interfere": {
    "pres": {
        "descrAdvanced": {
            "ts": {
                "en_US": "{Advanced Interference}\\n\\nAdvanced Interference reduces the Power skill of enemy hero by 20% during combat."
            }
        },
        "descrBasic": {
            "ts": {
                "en_US": "{Basic Interference}\\n\\nBasic Interference reduces the Power skill of enemy hero by 10% during combat."
            }
        },
        "descrExpert": {
            "ts": {
                "en_US": "{Expert Interference}\\n\\nExpert Interference reduces the Power skill of enemy hero by 30% during comba"
            }
        },
        "name": { "ts": { "en_US": "Interference" } }
    }
}
*/
export interface ISkillTranslationRecord {
    pres: {
        descrAdvanced: {
            ts: {
                en_US: string;
            }
        };
        descrBasic: {
            ts: {
                en_US: string;
            }
        };
        descrExpert: {
            ts: {
                en_US: string;
            }
        };
        name: {
            ts: {
                en_US: string;
            }
        };
    }
}
