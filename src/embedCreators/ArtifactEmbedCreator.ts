import { EventData } from '../models/internal-models';
import { ITranslatedArtifact } from '../heroes/types/IArtifact';
import BaseEmbedCreator from './BaseEmbedCreator.js';

/**
 * Class for creating artifact embeds.
 */
export class ArtifactEmbedCreator extends BaseEmbedCreator {
    /**
     * Constructs a new ArtifactEmbedCreator.
     *
     * @param languageLocation - The location for language-specific strings.
     * @param data - The event data.
     */
    constructor(languageLocation: string, data: EventData) {
        super(languageLocation, data);
    }

    /**
     * Adds an artifact's details to the embed.
     *
     * @param translatedArtifact - The translated artifact details.
     * @returns The current instance of ArtifactEmbedCreator.
     */
    addArtifact(translatedArtifact: ITranslatedArtifact): this {
        const artie = translatedArtifact.artifact;

        this.addNameAndDescription(translatedArtifact.translatedName, translatedArtifact.translatedDescription);

        this.addField({
            name: 'Class',
            value: artie.class,
            inline: true,
        });

        if (artie.cost !== undefined) {
            this.addField({
                name: 'Cost',
                value: artie.cost.toString(),
                inline: true,
            });
        }

        this.addField({
            name: 'Value',
            value: artie.value.toString(),
            inline: true,
        });

        this.addField({
            name: 'Slot',
            value: artie.slot.toString(),
            inline: true,
        });

        this.addField({
            name: 'Identifier',
            value: artie.identifier.toString(),
            inline: true,
        });

        if (artie.guard !== undefined) {
            this.addField({
                name: 'Guard Value',
                value: artie.guard.toString(),
                inline: true,
            });
        }

        if (artie.statBonus !== undefined) {
            let str = '';
            str += `**Attack:** \`${artie.statBonus.attack}\`\n`;
            str += `**Defense:** \`${artie.statBonus.defense}\`\n`;
            str += `**Spellpower:** \`${artie.statBonus.spellpower}\`\n`;
            str += `**Knowledge:** \`${artie.statBonus.knowledge}\`\n`;

            this.addField({
                name: 'Primary Stats',
                value: str,
                inline: false,
            });
        }

        // TODO - Add a hero-dependency - If a hero has this artifact, then make a non-inline field
        // TODO - Add a unit-dependency - If a unit has this artifact, then make a non-inline field
        // TODO - Add a dwelling-dependency - If a dwelling has this artifact, then make a non-inline field

        return this;
    }
}