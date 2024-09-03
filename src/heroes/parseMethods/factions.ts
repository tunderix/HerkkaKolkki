import factiondata from '../../../Data/gameResources/hota_base.fhmod/factions.fhdb.json' assert { type: 'json' };
import { Logger } from '../../services/logger.js';
import IFaction from '../types/IFaction.js';

export const getAllFactions = (): IFaction[] => {
    let factions = [];
    for (const [key, value] of Object.entries(factiondata[0].records)) {
        const factionAlignment = value['alignment'];
        const factionTerrain = value['nativeTerrain'];
        if (factionAlignment === undefined || factionTerrain === undefined) {
            Logger.warn('faction Alignment or Terrain is busted, Faction is ' + key);
        }
        const newfaction: IFaction = {
            identifier: key,
            untranslatedName: value.untranslatedName,
            alignment: factionAlignment,
            nativeTerrain: factionTerrain,
        };
        factions.push(newfaction);
    }
    return factions;
};
const Factions = getAllFactions();
export const getFactionByIdentifier = (factionidentifier: string): IFaction => {
    const allfactions = getAllFactions();
    const faction = allfactions.find(faction => faction.identifier === factionidentifier);
    return faction;
};
export default Factions;
