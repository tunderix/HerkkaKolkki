/*"sod.faction.castle": {
                "untranslatedName": "Castle",
                "alignment": "good",
                "nativeTerrain": "sod.terrain.grass",
                "warriorClass": {
                    "id": "sod.faction.castle.warrior",
                    "untranslatedName": "Knight",
                    "startParams": {
                        "ad": { "attack": 2, "defense": 2 },
                        "magic": { "sp": 1, "int": 1 }
                    },
                    "lowLevelIncrease": { "attack": 35, "defense": 45, "sp": 10, "int": 10 },
                    "highLevelIncrease": { "attack": 30, "defense": 30, "sp": 20, "int": 20 },
                    "skills": {
                        "sod.skill.artillery": -1,
                        "sod.skill.ballistics": 1,
                        "sod.skill.sorcery": -1,
                        "sod.skill.diplomacy": 1,
                        "sod.skill.armourer": -1,
                        "sod.skill.estates": 3,
                        "sod.skill.intelligence": -1,
                        "sod.skill.leadership": 5,
                        "sod.skill.logistics": -2,
                        "sod.skill.magicWater": 2,
                        "sod.skill.magicAir": 1,
                        "sod.skill.magicEarth": -1,
                        "sod.skill.magicFire": -1,
                        "sod.skill.mysticism": -1,
                        "sod.skill.navigation": 3,
                        "sod.skill.offense": -1,
                        "sod.skill.pathfind": -2,
                        "sod.skill.scouting": -1,
                        "sod.skill.archery": -2,
                        "sod.skill.tactics": 1,
                        "sod.skill.luck": 1
                    }
                },

                "mageClass": {
                    "id": "sod.faction.castle.mage",
                    "untranslatedName": "Cleric",
                    "startParams": {
                        "ad": { "attack": 1, "defense": 0 },
                        "magic": { "sp": 2, "int": 2 }
                    },
                    "lowLevelIncrease": { "attack": 20, "defense": 15, "sp": 30, "int": 35 },
                    "highLevelIncrease": { "attack": 20, "defense": 20, "sp": 30, "int": 30 },
                    "skills": {
                        "sod.skill.artillery": 1,
                        "sod.skill.ballistics": -1,
                        "sod.skill.sorcery": -1,
                        "sod.skill.scholar": -1,
                        "sod.skill.diplomacy": 3,
                        "sod.skill.eagleEye": -1,
                        "sod.skill.intelligence": -1,
                        "sod.skill.logistics": 1,
                        "sod.skill.magicWater": 1,
                        "sod.skill.magicAir": 1,
                        "sod.skill.magicEarth": -1,
                        "sod.skill.magicFire": -1,
                        "sod.skill.mysticism": -3,
                        "sod.skill.wisdom": -1,
                        "sod.skill.navigation": 1,
                        "sod.skill.offense": 1,
                        "sod.skill.firstAid": 4,
                        "sod.skill.pathfind": -1,
                        "sod.skill.scouting": 1,
                        "sod.skill.resistance": 1,
                        "sod.skill.luck": 2
                    }
                }
            }*/

export default interface IFaction {
    identifier: string;
}
