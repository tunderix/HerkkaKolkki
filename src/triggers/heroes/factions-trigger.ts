import { Message } from 'discord.js';

import Factions from '../../heroes/parseMethods/factions.js';
import { EventData } from '../../models/internal-models.js';
import messageIsMatchForTriggers from '../helpers/HeroesTriggerHelpers.js';
import HeroesTriggers from '../trigger-manifest.js';
import { Trigger } from '../trigger.js';
import IHeroesArguments from '../types/IHeroesArguments.js';

export class FactionsTrigger implements IHeroesArguments, Trigger {
    triggerWord = HeroesTriggers.factionInfo;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWord);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        msg.reply('There are [' + Factions.length + '] Factions in game.');
    }
}
