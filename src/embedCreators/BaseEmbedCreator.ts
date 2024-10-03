import { EventData } from '../models/internal-models';
import { Lang } from '../services/index.js';
import { EmbedBuilder } from 'discord.js';

/**
 * Base class for creating embeds with a builder pattern.
 */
export default class BaseEmbedCreator {
    protected _embed: EmbedBuilder;
    protected _fields: IEmbedCreatorField[] = [];

    /**
     * Constructs a new BaseEmbedCreator.
     *
     * @param languageLocation - The location for language-specific strings.
     * @param data - The event data.
     * @param variables - Optional variables for the embed.
     */
    constructor(languageLocation: string, data: EventData, variables?: {}) {
        this._embed = Lang.getEmbed(languageLocation, data.langGuild, variables ?? {});
    }

    /**
     * Sets the title and description of the embed.
     *
     * @param name - The title of the embed.
     * @param description - The description of the embed.
     * @returns The current instance of BaseEmbedCreator.
     */
    addNameAndDescription(name: string, description: string): this {
        this._embed.setTitle(name);
        this._embed.setDescription(description);
        return this;
    }

    /**
     * Adds a field to the embed.
     *
     * @param field - The field to add.
     * @returns The current instance of BaseEmbedCreator.
     */
    addField(field: IEmbedCreatorField): this {
        this._fields.push(field);
        return this;
    }

    /**
     * Adds multiple fields to the embed.
     *
     * @param fields - The fields to add.
     * @returns The current instance of BaseEmbedCreator.
     */
    addFields(fields: IEmbedCreatorField[]): this {
        this._fields.push(...fields);
        return this;
    }

    /**
     * Creates the embed with the added fields.
     *
     * @returns The constructed EmbedBuilder instance.
     */
    createEmbed(): EmbedBuilder {
        this._embed.addFields(this._fields);
        return this._embed;
    }
}