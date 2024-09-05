import HeroesTriggers, { uniqueFirstValues } from './heroes-trigger-templates.js';
import IHeroesArguments from './types/IHeroesArguments';
import { Trigger } from './trigger';
import { Utils } from 'linguini';
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
    triggerWords = HeroesTriggers.triggers;
    
    embedCreator: TriggersEmbedCreator;

    /**
     * Constructs fields for an embed message.
     * @returns {string} The constructed field string.
     */
    constructFieldsForEmbed(): string {
        let fieldString = '';
        // Add commands starting with "artifacts" or "artifact" as fields to embed
        for (const value of Object.values(HeroesTriggers)) {
            if (value[0] === 'artifacts' || value[0] === 'artifact') {
                fieldString += '> /';
                value.forEach(s => {
                    fieldString += s + ' ';
                });
                fieldString += '\n';
            }
        }
        return Utils.join(fieldString, '\n');
    }

    /**
     * Checks if the message matches the trigger words.
     * @param {Message} msg - The message to check.
     * @returns {boolean} True if the message matches the trigger words, false otherwise.
     */
    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    /**
     * Executes the trigger action.
     * @param {Message} msg - The message that triggered the action.
     * @param {EventData} data - The event data associated with the trigger.
     * @returns {Promise<void>} A promise that resolves when the action is complete.
     */
    public async execute(msg: Message, data: EventData): Promise<void> {
        this.embedCreator = new TriggersEmbedCreator('displayEmbeds.triggerInfo', data)
        
        uniqueFirstValues.forEach(v => {
            this.embedCreator.addTriggersWithSlash(v);
        })

        msg.reply({
            embeds: [this.embedCreator.createEmbed()],
        });
    }
}