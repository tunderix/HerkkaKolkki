import { artifactWithName } from './parseMethods/artifacts.js';
import IAuthors, { IAuthor } from './types/IAuthors.js';

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

export const getouthorse = (): IAuthors => {
    //console.log('outhorse are: ' + outhorse);
    return allAuthors;
};

getouthorse();
const names = getouthorse();
//console.log(names);
//console.log('Faction names are: ' + getFactionNames());

const sammal = allAuthors.authors.find(author => author.name === 'Sam');

console.log(artifactWithName("Charm Mana+3"));