import { EventData } from '../models/internal-models';
import { ITranslatedArtifact } from '../heroes/types/IArtifact';
import { EmbedBuilder } from 'discord.js';
import BaseEmbedCreator from './BaseEmbedCreator.js';

export class ArtifactEmbedCreator extends BaseEmbedCreator {
    constructor(languageLocation: string, data: EventData) {
        super(languageLocation, data);
    }

    addArtifact(translatedArtifact: ITranslatedArtifact) {
        const artie = translatedArtifact.artifact;
        
        this.setNameAndDescription(translatedArtifact.translatedName, translatedArtifact.translatedDescription);
        
        this.addField({
            name: "Class",
            value: artie.class,
            inline: true,
        })

        if(artie.cost !== undefined) {
            this.addField({
                name: "Cost",
                value: artie.cost.toString(),
                inline: true,
            })
        }

        this.addField({
            name: "Value",
            value: artie.value.toString(),
            inline: true,
        })

        this.addField({
            name: "slot",
            value: artie.slot.toString(),
            inline: true,
        })

        this.addField({
            name: "identifier",
            value: artie.identifier.toString(),
            inline: true,
        })

        if(artie.guard !== undefined) {
            this.addField({
                name: "Guard value",
                value: artie.guard.toString(),
                inline: true,
            })
        }
        
        if(artie.statBonus !== undefined) {
            let str = '';
            str += ' **Attack:** ` ' + artie.statBonus.attack + ' `\n';
            str += ' **Defense:** ` ' + artie.statBonus.defense + ' `\n';
            str += ' **Spellpower:** ` ' + artie.statBonus.spellpower + ' `\n';
            str += ' **Knowledge:** ` ' + artie.statBonus.knowledge + ' `\n';
            
            this.addField({
                name: "Primary Stats",
                value: str,
                inline: false,
            })
        }

        // TODO - Add a hero-dependency - If a hero has this artie, then make a non-inline field
        // TODO - Add a unit-dependency - If a hero has this artie, then make a non-inline field
        // TODO - Add a dwelling-dependency - If a hero has this artie, then make a non-inline field
    }
}