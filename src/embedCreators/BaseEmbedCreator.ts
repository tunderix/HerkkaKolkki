import { EventData } from '../models/internal-models';
import { Lang } from '../services/index.js';
import { EmbedBuilder } from 'discord.js';

export default class BaseEmbedCreator {
    protected _embed: EmbedBuilder;
    protected _fields : IEmbedCreatorField[] = [];

    constructor(languageLocation: string, data: EventData, variables?: {}) {
        this._embed = Lang.getEmbed(languageLocation, data.langGuild, variables ?? {});
    }
    
    setNameAndDescription (name: string, description: string) {
        this._embed.setTitle(name);
        this._embed.setDescription(description);
    }

    addField(field: IEmbedCreatorField){
        this._fields.push(field);
    }

    addFields(fields: IEmbedCreatorField[]) {
        this._fields.push(...fields);
    }

    createEmbed() : EmbedBuilder {
        this._embed.addFields(this._fields);
        return this._embed;
    }
}