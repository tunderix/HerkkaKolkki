import factions from '../../Data/gameResources/hota_base.fhmod/factions.fhdb.json' assert { type: 'json' };

const factionNames = Object.keys(factions[0].records);
console.log("faction names " + factionNames);

factionNames.forEach(faction => {
    let name = factions[0].records[faction].untranslatedName;
    console.log('faction id ' + faction + ":::: " + name);
})