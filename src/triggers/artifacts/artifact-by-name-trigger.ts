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
import { ArtifactEmbedCreator } from '../../embedCreators/ArtifactEmbedCreator.js';

export class ArtifactByNameTrigger implements IHeroesArguments, Trigger {
    triggerWords = HeroesTriggers.artifactByName;
    requireGuild: false;

    embedCreator: ArtifactEmbedCreator;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const indexToLookFor = indexForValueArgument(this.triggerWords);
        const artifactName = valueFromMsgContent(msg, indexToLookFor);
        const artifact = ArtifactWithName(artifactName);
        if(artifact === undefined) return;
        
        this.embedCreator = new ArtifactEmbedCreator('displayEmbeds.singleArtifact', data)
        this.embedCreator.addArtifact(artifact);

        msg.reply({
            embeds: [this.embedCreator.createEmbed()],
        });
    }
}