import factiondata from '../../../Data/gameResources/hota_base.fhmod/factions.fhdb.json' assert { type: 'json' };
import IFaction from '../types/IFaction.js';
const getAllFactionNames = (): string[] => {
    const factionNames = Object.keys(factiondata[0].records);
    const returnValue: string[] = [];

    factionNames.forEach(faction => {
        let name = factiondata[0].records[faction].untranslatedName;
        returnValue.push(name);
    });

    return returnValue;
};

export const getallfactions = (): IFaction[] => {
    let factions = [];
    for (const [key, value] of Object.entries(factiondata[0].records)) {
        const newfaction: IFaction = {
            identifier: key,
        };
        factions.push(newfaction);
    }
    return factions;
};

export const getfaction = (factionidentifier: string): IFaction => {
    const allfactions = getallfactions();
    const faction = allfactions.find(faction => faction.identifier === factionidentifier);
    return faction;
};
const castle = getfaction('sod.faction.castle');
