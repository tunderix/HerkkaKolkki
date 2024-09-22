import { Locale, Message } from 'discord.js';
import { EventData } from '../../models/internal-models';
import messageIsMatchForTriggers, { constructFieldsForEmbed } from '../helpers/HeroesTriggerHelpers.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../trigger-manifest.js';
import { Lang } from '../../services/index.js';

/**
 * Class representing an ArtifactInfoTrigger.
 * Implements the IHeroesArguments and Trigger interfaces.
 */
export class ArtifactInfoTrigger implements IHeroesArguments, Trigger {
    /**
     * Indicates whether a guild is required.
     * @type {boolean}
     */
    requireGuild = false;

    /**
     * Words that trigger the artifact info.
     * @type {string[]}
     */
    triggerWord = HeroesTriggers.artifactInfo;

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
        const embed = Lang.getEmbed('displayEmbeds.triggerInfo', data.langGuild, {});

        embed.addFields([{ name: 'Artifacts', value: constructFieldsForEmbed() }]);

        msg.reply({
            embeds: [embed],
        });
    }
}