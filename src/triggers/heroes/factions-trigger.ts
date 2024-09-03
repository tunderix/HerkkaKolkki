import { Message } from 'discord.js';

import { getallfactions } from '../../heroes/parseMethods/factions.js';
import { EventData } from '../../models/internal-models.js';
import { RegexUtils } from '../../utils/regex-utils.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import { Trigger } from '../trigger.js';
import IHeroesArguments from '../types/IHeroesArguments.js';

export class FactionsTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;

    heroesArgs = [];
    triggerWords = HeroesTriggers.factions;

    heroesArgsValid(triggerArgs: string[]): boolean {
        // Does discord message have exact amount of args that the trigger has?
        if (triggerArgs.length !== this.triggerWords.length) {
            return false;
        }

        let isValid = true;
        this.triggerWords.forEach((triggerWord, index) => {
            const triggerWordIsParameter = RegexUtils.isWrappedWithStar(triggerWord);
            if (!triggerWordIsParameter) {
                const discordMatchesTriggerWord = triggerArgs[index] === triggerWord;
                if (!discordMatchesTriggerWord) isValid = false;
            }
        });

        return isValid;
    }

    triggered(msg: Message): boolean {
        const msgWithoutSlash = msg.content.slice(1);
        const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);
        return this.heroesArgsValid(args);
    }
    public async execute(msg: Message, data: EventData): Promise<void> {
        const factions = getallfactions();
        msg.reply('There are [' + factions[0].untranslatedName + '] factions in HOTA');
    }
}
