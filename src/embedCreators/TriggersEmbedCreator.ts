import { EventData } from '../models/internal-models';
import BaseEmbedCreator from './BaseEmbedCreator.js';
import { CommandSectionBuilder } from './CommandSectionBuilder.js';
import HeroesTriggers from '../triggers/trigger-manifest.js';

/**
 * Class for creating trigger embeds.
 */
export class TriggersEmbedCreator extends BaseEmbedCreator {
    private sectionBuilder: CommandSectionBuilder;

    /**
     * Constructs a new TriggersEmbedCreator.
     *
     * @param languageLocation - The location for language-specific strings.
     * @param data - The event data.
     */
    constructor(languageLocation: string, data: EventData) {
        super(languageLocation, data);
        this.sectionBuilder = new CommandSectionBuilder();
    }

    /**
     * Adds a section for a specific category header to the embed.
     *
     * @param categoryHeader - The category header to add.
     * @returns The current instance of TriggersEmbedCreator.
     */
    addSectionFor(categoryHeader: string): this {
        const sectionString = this.sectionBuilder.constructSectionFor(categoryHeader, HeroesTriggers);
        this.addField({ name: categoryHeader, value: sectionString, inline: false });
        return this;
    }
}