import { Message } from 'discord.js';
import { ArtifactsByClass } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../trigger-manifest.js';
import messageIsMatchForTriggers, { getUserVariableValue } from '../helpers/HeroesTriggerHelpers.js';
import ArtifactClass from '../../heroes/types/ArtifactClass.js';

export class ArtifactsByClassTrigger implements IHeroesArguments, Trigger {
    triggerWord = HeroesTriggers.artifactsByClass;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWord);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const className = getUserVariableValue(msg, this.triggerWord.commandArray);
        if (!className) {
            msg.reply('Class name not provided.');
            return;
        }

        const artifacts = ArtifactsByClass(ArtifactClass[className]);
        let message: string = '[';
        artifacts.forEach(a => {
            message += a.translatedName;
            message += ',';
        });
        message += ']';
        msg.reply(message);
    }
}