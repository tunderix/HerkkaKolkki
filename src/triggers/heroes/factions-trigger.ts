import { Message } from 'discord.js';

import Factions from '../../heroes/parseMethods/factions.js';
import { EventData } from '../../models/internal-models.js';
import messageIsMatchForTriggers from '../helpers/HeroesTriggerHelpers.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import { Trigger } from '../trigger.js';
import IHeroesArguments from '../types/IHeroesArguments.js';

export class FactionsTrigger implements IHeroesArguments, Trigger {
    triggerWords = HeroesTriggers.factions;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        msg.reply('There are [' + Factions.length + '] Factions in game.');
    }
}
