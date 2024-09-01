import trHota from '../../Data/loc_hota_tr_update.fhdb.json' assert { type: 'json' };
import trlngHota from '../../Data/loc_hota_trlng_update.fhdb.json' assert { type: 'json' };
import { IArtifactTranslationRecord } from './types/IArtifactTranslationRecord';
import ILanguageScope from './types/ILanguageScope.js';
import ITranslationRecord from './types/ITranslationRecord.js';
import LanguageScope from './types/LanguageScope.js';

const CombinedTranslations = (): ILanguageScope[] => {
    const combinedTranslations: ILanguageScope[] = [];

    for (const node of trHota) {
        const scope = node.scope
        const combinedNode = trlngHota.find(n => n.scope === scope);
        combinedNode.records = {...combinedNode.records, ...node.records};
        combinedTranslations.push(combinedNode);
    }
    return combinedTranslations;
}

export const TranslationsForScope = (scope: LanguageScope): ILanguageScope => {
    return CombinedTranslations().find(trScope => trScope.scope == scope)
}

/*
export const TranslationRecordFromScope = (scope: LanguageScope, identifier: string) : ITranslationRecord => {
    return CombinedTranslations().find(trScope => trScope.scope == scope).records[identifier];
}
*/

export const ArtifactTranslation = (identifier: string): IArtifactTranslationRecord => {
    const allArtifactRecords = CombinedTranslations().find(trScope => trScope.scope == LanguageScope.Artifacts).records; 
    return allArtifactRecords[identifier] as IArtifactTranslationRecord;
}

export const ArtifactTranslationFor = (identifier: string) : [string, string] => {
    const arti = ArtifactTranslation(identifier);
    return [arti.pres.name.ts.en_US, arti.pres.descr.ts.en_US];
}

export const ArtifactNameFor = (identifier: string) : string => {
    return ArtifactTranslation(identifier).pres.name.ts.en_US;
}

export const ArtifactDescriptionFor = (identifier: string) : string => {
    return ArtifactTranslation(identifier).pres.descr.ts.en_US;
}

export default CombinedTranslations();