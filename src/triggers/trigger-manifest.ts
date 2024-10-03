import ITriggerCommand from './types/ITriggerCommand.js';

const manifest: Record<string, ITriggerCommand> = {
    triggers: { triggerWord: 'commands', category: 'commands', commandArray: [] },
    artifactInfo: { triggerWord: 'artifacts', category: 'artifacts', commandArray: [] },
    artifacts: { triggerWord: 'artifacts', category: 'artifacts', commandArray: [{ argument: 'all' }] },
    artifactsBySlot: {
        triggerWord: 'artifacts',
        category: 'artifacts',
        commandArray: [{ argument: 'slot' }, { argument: 'SLOT_NAME', isUserVariable: true }],
    },
    artifactsByClass: {
        triggerWord: 'artifacts',
        category: 'artifacts',
        commandArray: [{ argument: 'class' }, { argument: 'ARTIFACT_CLASS', isUserVariable: true }],
    },
    artifactByName: {
        triggerWord: 'artifact',
        category: 'artifact',
        commandArray: [{ argument: 'ARTIFACT_NAME', isUserVariable: true }],
    },
    inventorySlots: { triggerWord: 'artifact', category: 'artifact', commandArray: [{ argument: 'slots' }] },
    artifactClasses: { triggerWord: 'artifact', category: 'artifact', commandArray: [{ argument: 'classes' }] },
    spellInfo: { triggerWord: 'spells', category: 'spells', commandArray: [] },
    spellByName: {
        triggerWord: 'spell',
        category: 'spell',
        commandArray: [{ argument: 'SPELL_NAME', isUserVariable: true }],
    },
    spellsByMagicSchool: {
        triggerWord: 'spells',
        category: 'spells',
        commandArray: [{ argument: 'school' }, { argument: 'MAGIC_SCHOOL', isUserVariable: true }],
    },
    spellsByMagicLevel: {
        triggerWord: 'spells',
        category: 'spells',
        commandArray: [{ argument: 'level' }, { argument: 'MAGIC_LEVEL', isUserVariable: true }],
    },
    manaCostForSpell: {
        triggerWord: 'manacost',
        category: 'manacost',
        commandArray: [{ argument: 'SPELL_NAME', isUserVariable: true }],
    },
    terrainInfo: { triggerWord: 'terrains', category: 'terrains', commandArray: [] },
    terrains: { triggerWord: 'terrains', category: 'terrains', commandArray: [{ argument: 'all' }] },
    terrainByName: {
        triggerWord: 'terrain',
        category: 'terrain',
        commandArray: [{ argument: 'TERRAIN_NAME', isUserVariable: true }],
    },
    skillInfo: { triggerWord: 'skills', category: 'skills', commandArray: [] },
    skills: { triggerWord: 'skills', category: 'skills', commandArray: [{ argument: 'list' }] },
    skillByName: {
        triggerWord: 'skill',
        category: 'skill',
        commandArray: [{ argument: 'SKILL_NAME', isUserVariable: true }],
    },
    unitInfo: { triggerWord: 'units', category: 'units', commandArray: [] },
    unitsByFaction: {
        triggerWord: 'units',
        category: 'units',
        commandArray: [{ argument: 'faction' }, { argument: 'FACTION_NAME', isUserVariable: true }],
    },
    unitByName: {
        triggerWord: 'unit',
        category: 'unit',
        commandArray: [{ argument: 'UNIT_NAME', isUserVariable: true }],
    },
    heroesInfo: { triggerWord: 'heroes', category: 'heroes', commandArray: [] },
    heroByName: {
        triggerWord: 'hero',
        category: 'hero',
        commandArray: [{ argument: 'HERO_NAME', isUserVariable: true }],
    },
    heroesBySpell: {
        triggerWord: 'heroes',
        category: 'heroes',
        commandArray: [{ argument: 'spell' }, { argument: 'SPELL_NAME', isUserVariable: true }],
    },
    heroesByFaction: {
        triggerWord: 'heroes',
        category: 'heroes',
        commandArray: [{ argument: 'faction' }, { argument: 'FACTION_NAME', isUserVariable: true }],
    },
    heroesBySkill: {
        triggerWord: 'heroes',
        category: 'heroes',
        commandArray: [{ argument: 'skill' }, { argument: 'SKILL_NAME', isUserVariable: true }],
    },
    factionInfo: { triggerWord: 'factions', category: 'factions', commandArray: [] },
    factionByName: {
        triggerWord: 'faction', category: 'faction',
        commandArray: [{ argument: 'FACTION_NAME', isUserVariable: true }],
    },
};

/**
 * A unique list of trigger words from the manifest.
 *
 * @constant
 * @type {string[]}
 */
export const UniqueTriggerWords = Array.from(
    new Set(Object.values(manifest).map(arr => arr.triggerWord)),
);

/**
 * A unique list of categories from the manifest.
 *
 * @constant
 * @type {string[]}
 */
export const UniqueCategories = Array.from(
    new Set(Object.values(manifest).map(arr => arr.category)),
);

export default manifest;