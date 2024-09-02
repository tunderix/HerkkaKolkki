import { Message } from 'discord.js';
import { Artifacts } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import messageIsMatchForTriggers from '../helpers/HeroesTriggerHelpers.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';

export class ArtifactInfoTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;
    triggerWords = HeroesTriggers.artifactInfo;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        msg.reply('There are [' + Artifacts.length + '] artifacts in HOTA\nThese are the commands for artifacts:[]');
    }
}