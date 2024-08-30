import artifactData from '../../../Data/gameResources/hota_base.fhmod/artifacts.fhdb.json' assert { type: 'json' };
import getArtifactTranslation from '../translations/hota_tr.js';
import IArtifact from '../types/IArtifact.js';

const parseAllArtifacts = (): IArtifact[] => {
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
            translatedName: "",
            translatedDescription: "",
            slot: value.slot,
            bmUnit: value.bmUnit,
        };
        artifactObjects.push(newArtifact);
    }
    return artifactObjects;
};

// Find artifact with name
export const artifactWithName = (name: string) : IArtifact => {
    const artie = parseAllArtifacts().find(a => a.untranslatedName === name);
    const translation = getArtifactTranslation(artie.identifier);
    
    artie.translatedName = translation?.name;
    artie.translatedDescription = translation?.description;
    
    return artie;
}

// TODO - Artifacts with value from x to y

// TODO - Artifacts with class "treasure"

// TODO - Artifacts which go to certain slot

// ...

export default parseAllArtifacts;