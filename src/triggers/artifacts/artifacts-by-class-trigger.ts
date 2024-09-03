import { Message } from 'discord.js';
import { ArtifactsByClass } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import messageIsMatchForTriggers, {
    indexForValueArgument,
    valueFromMsgContent
} from "../helpers/HeroesTriggerHelpers.js";
import ArtifactClass from "../../heroes/types/ArtifactClass.js";

export class ArtifactsByClassTrigger implements IHeroesArguments, Trigger {
    triggerWords = HeroesTriggers.artifactsByClass;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const indexToLookFor = indexForValueArgument(this.triggerWords);
        const className = valueFromMsgContent(msg, indexToLookFor);
        const artifacts = ArtifactsByClass(ArtifactClass[className]);
        let message:string = "["
        artifacts.forEach(a => {
            message += a.translatedName;
            message += ","
        })
        message += "]"
        msg.reply(message);
    }
}