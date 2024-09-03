import { Message } from 'discord.js';
import { EventData } from '../../models/internal-models';
import messageIsMatchForTriggers from '../helpers/HeroesTriggerHelpers.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import {Lang} from "../../services/index.js";
import { Utils } from 'linguini';


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
    triggerWords = HeroesTriggers.artifactInfo;

    /**
     * Constructs fields for an embed message.
     * @returns {string} The constructed field string.
     */
    constructFieldsForEmbed(): string {
        let fieldString = "";
        // Add commands starting with "artifacts" or "artifact" as fields to embed
        for (const value of Object.values(HeroesTriggers)) {
            if (value[0] === "artifacts" || value[0] === "artifact") {
                fieldString += "> /";
                value.forEach(s => {
                    fieldString += s + " ";
                });
                fieldString += "\n";
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
        const embed = Lang.getEmbed('displayEmbeds.triggerInfo', data.langGuild, {});

        embed.addFields([{ name: "Artifacts", value: this.constructFieldsForEmbed() }]);

        msg.reply({
            embeds: [embed],
        });
    }
}