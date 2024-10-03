import { Message } from 'discord.js';
import { EventData } from '../../models/internal-models';
import messageIsMatchForTriggers from '../helpers/HeroesTriggerHelpers.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../trigger-manifest.js';
import ArtifactClass from '../../heroes/types/ArtifactClass.js';

export class ArtifactClassesTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;
    triggerWord = HeroesTriggers.artifactClasses;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWord);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const values = Object.values(ArtifactClass);
        msg.reply(values.toString());
    }
}