import HeroesTriggers, { UniqueCategories } from './trigger-manifest.js';
import IHeroesArguments from './types/IHeroesArguments';
import { Trigger } from './trigger';
import { Message } from 'discord.js';
import messageIsMatchForTriggers from './helpers/HeroesTriggerHelpers.js';
import { EventData } from '../models/internal-models';
import { TriggersEmbedCreator } from '../embedCreators/TriggersEmbedCreator.js';


/**
 * Class representing an ArtifactInfoTrigger.
 * Implements the IHeroesArguments and Trigger interfaces.
 */
export class AllTriggersInfoTrigger implements IHeroesArguments, Trigger {
    /**
     * Indicates whether a guild is required.
     * @type {boolean}
     */
    requireGuild = false;

    /**
     * Words that trigger the artifact info.
     * @type {string[]}
     */
    triggerWord = HeroesTriggers.triggers;

    embedCreator: TriggersEmbedCreator;

    /**
     * Checks if the message matches the trigger words.
     * @param {Message} msg - The message to check.
     * @returns {boolean} True if the message matches the trigger words, false otherwise.
     */
    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWord);
    }

    /**
     * Executes the trigger action.
     * @param {Message} msg - The message that triggered the action.
     * @param {EventData} data - The event data associated with the trigger.
     * @returns {Promise<void>} A promise that resolves when the action is complete.
     */
    public async execute(msg: Message, data: EventData): Promise<void> {
        this.embedCreator = new TriggersEmbedCreator('displayEmbeds.triggerInfo', data);

        UniqueCategories.forEach(v => {
            this.embedCreator.addSectionFor(v);
        });

        msg.reply({
            embeds: [this.embedCreator.createEmbed()],
        });
    }
}