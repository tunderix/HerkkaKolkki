import { Message } from 'discord.js';
import { artifactsContaining } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { RegexUtils } from '../../utils/index.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';

export class ArtifactsByNameTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;

    triggerWords = HeroesTriggers.artifactsContainingName;
    heroesArgs = ['artifacts'];

    heroesArgsValid(triggerArgs: string[]): boolean {
        return this.heroesArgs[0] === triggerArgs[0].slice(1) && triggerArgs.length < 3;
    }

    triggered(msg: Message): boolean {
        const args = msg.content.split(' ');
        return this.heroesArgsValid(args);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const args = msg.content.split(' ');

        const escapedArtifactName = RegexUtils.escapeDoubleQuotes(args[1]);
        const artifacts = artifactsContaining(escapedArtifactName);

        let message = 'Artifacts containing [' + escapedArtifactName + '] are: ';
        artifacts.forEach(a => {
            message += a.translatedName;
            message += ', ';
        });

        msg.reply(message.slice(0, -2));
    }
}