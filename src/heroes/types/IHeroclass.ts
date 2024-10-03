export default interface IHeroclass {
    identifier: string;
    id: string;
    untranslatedName: string;
}

export interface ITranslatedheroclass {
    heroClass: IHeroclass;
    translatedDescription: string;
    translatedName: string;
}
