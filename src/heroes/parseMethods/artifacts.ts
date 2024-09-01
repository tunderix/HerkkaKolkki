import artifactData from '../../../Data/gameResources/hota_base.fhmod/artifacts.fhdb.json' assert { type: 'json' };
import { Logger } from '../../services/index.js';
import { ArtifactTranslationFor } from '../translations.js';
import IArtifact, { ITranslatedArtifact } from '../types/IArtifact.js';

const createArtifactFrom = (key: string, value: any): IArtifact => {
    return {
        identifier: key,
        class: value.class,
        cost: value.cost,
        value: value.value,
        guard: value.guard,
        untranslatedName: value.untranslatedName,
        slot: value.slot,
        bmUnit: value.bmUnit,
    };
}

const parseAllArtifacts = (): ITranslatedArtifact[] => {
    const data = artifactData;
    const artifacts = data[0].records;
    const artifactObjects : ITranslatedArtifact[] = [];
    
    for (const [key, value] of Object.entries(artifacts)) {
        const [name, description] = ArtifactTranslationFor(key);
        
        if(description === undefined || name === undefined) {
            Logger.warn("Couldnt find description or name translation for artifact.");
        }
        
        artifactObjects.push({ 
            artifact: createArtifactFrom(key, value), 
            translatedName: name, 
            translatedDescription: description
        });
    }
    return artifactObjects;
};

export const artifactWithName = (name: string) : ITranslatedArtifact => {
    return parseAllArtifacts().find(a => a.translatedName === name);
}

// Find all artifacts that contain
export const artifactsContaining = (name: string) : ITranslatedArtifact[] => {
    return parseAllArtifacts().filter(a => a.translatedName.toLowerCase().includes(name.toLowerCase()));;
}

export default parseAllArtifacts;