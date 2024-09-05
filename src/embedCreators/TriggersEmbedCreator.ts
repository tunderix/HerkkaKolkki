import { EventData } from '../models/internal-models';
import BaseEmbedCreator from './BaseEmbedCreator.js';
import HeroesTriggers from '../triggers/heroes-trigger-templates.js';

export class TriggersEmbedCreator extends BaseEmbedCreator {
    constructor(languageLocation: string, data: EventData) {
        super(languageLocation, data);
    }
    
    addTriggersWithSlash(slash: string) {
        this.setNameAndDescription(slash, "translatedArtifact.translatedDescription");
        let fieldString = '';
        for (const value of Object.values(HeroesTriggers)) {
            if(value[0] === slash) {
                fieldString += '> /';
                value.forEach(s => {
                    fieldString += s + ' ';
                });
                fieldString += '\n';
            }
        }
        this.addField({ name: slash, value: fieldString, inline: false })
    }
}