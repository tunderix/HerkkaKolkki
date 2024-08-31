
/*
"hota.artifact.battleMachine.cannon": {
    "pres": {
        "descr": {
            "ts": {
                "en_US": "{Cannon}\\n\\nUse this war machine to target your enemy troops and fortifications in combat."
            }
        },
        "name": { "ts": { "en_US": "Cannon" } }
    }
},
*/
export interface IArtifactTranslationRecord {
    pres: {
        descr: {
            ts: {
                en_US: string;
            }
        };
        name: {
            ts: {
                en_US: string;
            }
        }
    }
}