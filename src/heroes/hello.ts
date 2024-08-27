import factions from '../../Data/gameResources/hota_base.fhmod/factions.fhdb.json' assert { type: 'json' };


const getFactionNames = (): string[] => {
    const factionNames = Object.keys(factions[0].records);
    const returnValue: string[] = [];
    
    factionNames.forEach(faction => {
        let name = factions[0].records[faction].untranslatedName;
        returnValue.push(name);
    })
    
    return returnValue;
}


console.log('Faction names are: ' + getFactionNames());