import factions from '../../Data/gameResources/hota_base.fhmod/factions.fhdb.json' assert { type: 'json' };
let name = factions[0].records['sod.faction.castle'].untranslatedName;

console.log(name);
