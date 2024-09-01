import { Message } from 'discord.js';
import parseAllArtifacts from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';

export class ArtifactsTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;

    heroesArgs = ['artifacts'];
    triggerWords = HeroesTriggers.artifacts;

    heroesArgsValid(triggerArgs: string[]): boolean {
        return this.heroesArgs[0] === triggerArgs[0].slice(1) && triggerArgs.length < 2;
    }

    triggered(msg: Message): boolean {
        const args = msg.content.split(' ');
        return this.heroesArgsValid(args);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const artifacts = parseAllArtifacts();
        msg.reply('There are [' + artifacts.length + '] artifacts in HOTA');
    }
}