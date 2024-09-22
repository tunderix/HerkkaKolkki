import { Message } from 'discord.js';
import { ArtifactWithName } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../trigger-manifest.js';
import messageIsMatchForTriggers, { getUserVariableValue } from '../helpers/HeroesTriggerHelpers.js';
import { ArtifactEmbedCreator } from '../../embedCreators/ArtifactEmbedCreator.js';

export class ArtifactByNameTrigger implements IHeroesArguments, Trigger {
    triggerWord = HeroesTriggers.artifactByName;
    requireGuild: false;

    embedCreator: ArtifactEmbedCreator;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWord);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const artifactName = getUserVariableValue(msg, this.triggerWord.commandArray);

        if (!artifactName) {
            msg.reply('Artifact name not provided.');
            return;
        }

        const artifact = ArtifactWithName(artifactName);

        if (!artifact) {
            msg.reply('Artifact was not found with name: ' + artifactName);
            return;
        }

        this.embedCreator = new ArtifactEmbedCreator('displayEmbeds.singleArtifact', data);
        this.embedCreator.addArtifact(artifact);

        msg.reply({
            embeds: [this.embedCreator.createEmbed()],
        });
    }
}