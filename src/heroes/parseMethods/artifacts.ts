import artifactData from '../../../Data/gameResources/hota_base.fhmod/artifacts.fhdb.json' assert { type: 'json' };
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
            slot: value.slot,
            bmUnit: value.bmUnit,
        };
        artifactObjects.push(newArtifact);
    }
    return artifactObjects;
};

// Find artifact with name
export const artifactWithName = (name: string) : IArtifact => {
    return parseAllArtifacts().find(a => a.untranslatedName === name);
}

// TODO - Artifacts with value from x to y

// TODO - Artifacts with class "treasure"

// TODO - Artifacts which go to certain slot

// ...

export default parseAllArtifacts;