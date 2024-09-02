import { Message } from 'discord.js';
import { ArtifactWithName } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import messageIsMatchForTriggers, {
    indexForValueArgument,
    valueFromMsgContent
} from "../helpers/HeroesTriggerHelpers.js";

export class ArtifactByNameTrigger implements IHeroesArguments, Trigger {
    triggerWords = HeroesTriggers.artifactByName;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const indexToLookFor = indexForValueArgument(this.triggerWords);
        const artifactName = valueFromMsgContent(msg, indexToLookFor);
        const artifact = ArtifactWithName(artifactName);
        if(artifact === undefined) return;
        msg.reply("Artifact is : " + artifact.translatedName + ". --- " + artifact.artifact.identifier);
    }
}