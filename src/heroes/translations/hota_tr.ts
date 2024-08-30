import trHota from '../../../Data/loc_hota_tr_update.fhdb.json' assert { type: 'json' };
import trlngHota from '../../../Data/loc_hota_trlng_update.fhdb.json' assert { type: 'json' };
import trSod from '../../../Data/loc_sod_tr_update.fhdb.json' assert { type: 'json' };

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

export const getHotaLngTranslations = () : IArtifactTranslation[] => {
    let artifactRecords = trlngHota.find(t => t.scope === "artifacts").records;

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

export const getSodTranslations = () : IArtifactTranslation[] => {
    let artifactRecords = trSod.find(t => t.scope === "artifacts").records;

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

// Find translation by extending the data in order : sod > hota_tr > hota_trlng
const getArtifactTranslation = (identifier: string): IArtifactTranslation => {
    
    const sod = getSodTranslations().find(t => t.identifier === identifier);
    const hota = getHotaTranslations().find(t => t.identifier === identifier);
    const hotalng = getHotaLngTranslations().find(t => t.identifier === identifier);

    const returnObject: IArtifactTranslation = {
        description: sod?.description,
        identifier: identifier,
        name: sod?.name
    }
    
    if(returnObject.description === undefined) {
        returnObject.description = hota.description;
    }
    if(returnObject.description === undefined) {
        returnObject.description = hotalng.description;
    }
    if(returnObject.description === undefined) {
        returnObject.description = "";
    }

    if(returnObject.name === undefined) {
        returnObject.name = hota.name;
    }
    if(returnObject.name === undefined) {
        returnObject.name = hotalng.name;
    }
    if(returnObject.name === undefined) {
        returnObject.name = "";
    }
    
    return returnObject;
}

export default getArtifactTranslation;