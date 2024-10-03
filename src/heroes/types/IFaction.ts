export default interface IFaction {
    identifier: string;
    untranslatedName: string;
    alignment: string;
    nativeTerrain: string;
}

export interface ITranslatedFaction {
    faction: IFaction;
    untranslatedDescription: string;
    translatedName: string;
}
