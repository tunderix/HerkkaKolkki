import trHota from '../../../Data/loc_hota_tr_update.fhdb.json' assert { type: 'json' };
import trlngHota from '../../../Data/loc_hota_trlng_update.fhdb.json' assert { type: 'json' };

interface IArtifactTranslation {
    identifier: string;
    name: string;
    description: string;
}


export const getHotaTranslations = () : IArtifactTranslation[] => {
    let artifactRecords = trHota.find(t => t.scope === "artifacts").records;
    
    const artifactTranslations: IArtifactTranslation[] = [];
    
    for (const [key, value] of Object.entries(artifactRecords)) {
        artifactTranslations.push({
            identifier: key,
            name: value["pres"]?.["name"]?.["ts"]?.["en_US"],
            description: value["pres"]?.["descr"]?.["ts"]?.["en_US"],
        });
    }
    
    return artifactTranslations;
}
/*
const getArtifactTranslation = (identifier: string): IArtifactTranslation => {
    const translations = combinedTranslations();
    let artifactRecords = translations.find(t => t.scope === "artifacts").records;
    let foundTranslation: IArtifactTranslation = undefined;
    
    for (const [key, value] of Object.entries(artifactRecords)) {
        if(key === identifier) {
            foundTranslation = {
                identifier: key,
                name: value["pres"]?.["name"]?.["ts"]?.["en_US"],
                description: value["pres"]?.["descr"]?.["ts"]?.["en_US"],
            };
            break;
        }
    }
    return foundTranslation;
}

export default getArtifactTranslation;

 */