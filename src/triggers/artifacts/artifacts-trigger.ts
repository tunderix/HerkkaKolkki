import IHeroesArguments from '../types/IHeroesArguments';
import { Trigger } from '../trigger';
import { Message } from 'discord.js';
import { EventData } from '../../models/internal-models';
import HeroesTriggers from '../trigger-manifest.js';
import { messageIsMatchForTriggers } from '../helpers/HeroesTriggerHelpers.js';
import { Artifacts } from '../../heroes/parseMethods/artifacts.js';

export class ArtifactsTrigger implements IHeroesArguments, Trigger {
    triggerWord = HeroesTriggers.artifacts;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWord);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        msg.reply('There are [' + Artifacts.length + '] artifacts in game.');
    }
}