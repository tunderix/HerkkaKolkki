import ArtifactData from '../../../Data/gameResources/hota_base.fhmod/artifacts.fhdb.json' assert { type: 'json' };
import { Logger } from '../../services/index.js';
import { ArtifactTranslationFor } from '../translations.js';
import IArtifact, { ITranslatedArtifact } from '../types/IArtifact.js';
import InventorySlot from '../types/InventorySlot';


// #region Helper Functions

/**
 * Creates an artifact object based on the provided key and value.
 * @param key - The identifier for the artifact.
 * @param value - The data associated with the artifact.
 * @returns The created artifact object.
 */
const createArtifactBasedOn = (key: string, value: any): IArtifact => {
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


/**
 * Decorates an artifact with its translations.
 * @param artifact - The artifact to be decorated.
 * @returns The artifact with its translations.
 */
const decorateArtifactWithTranslations = (artifact: IArtifact) : ITranslatedArtifact => {
    const [name, description] = ArtifactTranslationFor(artifact.identifier);

    if(description === undefined || name === undefined) {
        Logger.warn("Couldnt find description or name translation for artifact.");
    }

    return {
        artifact: artifact,
        translatedName: name,
        translatedDescription: description
    }
}

// #endregion


// #region The Beef

/**
 * Parses all artifacts from the JSON data and decorates them with translations.
 * @returns An array of translated artifacts.
 */
const parseAllArtifacts = (): ITranslatedArtifact[] => {
    const artifactObjects : ITranslatedArtifact[] = [];
    
    for (const [key, value] of Object.entries(ArtifactData[0].records)) {
        const artifact = createArtifactBasedOn(key, value);
        const translatedArtifact= decorateArtifactWithTranslations(artifact);
        artifactObjects.push(translatedArtifact);
    }
    return artifactObjects;
};

// Parse the artifacts once and store the result
const parsedArtifacts = parseAllArtifacts();

// #endregion


// #region Exported Variables and Functions

/**
 * An array of all translated artifacts.
 */
export const Artifacts : ITranslatedArtifact[] = parsedArtifacts;


/**
 * Filters artifacts by their inventory slot.
 * @param inventorySlot - The inventory slot to filter by.
 * @returns An array of artifacts that match the inventory slot.
 */
export const ArtifactsBySlot = (inventorySlot: InventorySlot) : ITranslatedArtifact[] => {
    return parsedArtifacts.filter(a => a.artifact.slot.toLowerCase().match(inventorySlot));
}


/**
 * Filters artifacts by their class.
 * @param artifactClass - The class to filter by.
 * @returns An array of artifacts that match the class.
 */
export const ArtifactsByClass = (artifactClass: InventorySlot) : ITranslatedArtifact[] => {
    return parsedArtifacts.filter(a => a.artifact.class.toLowerCase().match(artifactClass));
}


/**
 * Finds artifact by their translated name.
 * @param name - The name to search for.
 * @returns An artifact that contain the name.
 */
export const ArtifactWithName = (name: string) : ITranslatedArtifact => {
    return parsedArtifacts.find(a => a.translatedName === name);
}


/**
 * Finds an artifact by its exact translated name.
 * @param name - The exact name to search for.
 * @returns The artifact with the matching name, or undefined if not found.
 */
export default parsedArtifacts;

// #endregion