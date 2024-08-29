import IArtifact from './IArtifact.js';
import IAuthors, { IAuthor } from './IAuthors.js';
import artifactData from '../../Data/gameResources/hota_base.fhmod/artifacts.fhdb.json' assert { type: 'json' };
import factions from '../../Data/gameResources/hota_base.fhmod/factions.fhdb.json' assert { type: 'json' };
// TODO - Get all artifacts from data

// Get all factions from data
const getFactionNames = (): string[] => {
    const factionNames = Object.keys(factions[0].records);
    const returnValue: string[] = [];

    factionNames.forEach(faction => {
        let name = factions[0].records[faction].untranslatedName;
        returnValue.push(name);
    });

    return returnValue;
};
const Sami: IAuthor = {
    name: 'Sami',
    nick: '',
};
const Alfo: IAuthor = {
    name: 'Alfo',
    nick: '',
};
const allAuthors: IAuthors = {
    authors: [Sami, Alfo],
};

export const parseArtifacts = (): IArtifact[] => {
    const data = artifactData;
    const artifacts = data[0].records;
    const artifactObjects = [];
    for (const [key, value] of Object.entries(artifacts)) {
        const newArtifact: IArtifact = {
            identifier: key,
            class: value.class,
            cost: value.cost,
            value: value.value,
            guard: value.guard,
            untranslatedName: value.untranslatedName,
            slot: value.slot,
            bmUnit: value.bmUnit,
        };
        artifactObjects.push(newArtifact);
    }
    return artifactObjects;
};
export const getouthorse = (): IAuthors => {
    //console.log('outhorse are: ' + outhorse);
    return allAuthors;
};
getouthorse();
const names = getouthorse();
//console.log(names);
//console.log('Faction names are: ' + getFactionNames());

const sammal = allAuthors.authors.find(author => author.name === 'Sam');
//console.log(sammal);
console.log(parseArtifacts());
