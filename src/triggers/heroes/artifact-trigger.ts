import { Message } from 'discord.js';
import { artifactWithName } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { RegexUtils } from '../../utils/index.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';


export class ArtifactTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;
    
    triggerWords = HeroesTriggers.artifactByName;
    heroesArgs = ['artifact'];

    heroesArgsValid(triggerArgs: string[]): boolean {
        
        // Does discord message have exact amount of args that the trigger has?
        if(triggerArgs.length !== this.triggerWords.length) {
            return false;
        }
        
        let isValid = true; 
        this.triggerWords.forEach((triggerWord, index) => {
            const triggerWordIsParameter = RegexUtils.isWrappedWithStar(triggerWord);
            if(!triggerWordIsParameter){
                const discordMatchesTriggerWord = triggerArgs[index] === triggerWord
                if(!discordMatchesTriggerWord) isValid = false;
            }
        })
        
        return isValid;
    }
    
    triggered(msg: Message): boolean {
        const msgWithoutSlash = msg.content.slice(1);
        const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);
        return this.heroesArgsValid(args);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const msgWithoutSlash = msg.content.slice(1);
        const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);

        const escapeDoubleQuotes = (str: string): string => {
            return str.replace(/"/g, '');
        };
        
        
        const escapedArtifactName = escapeDoubleQuotes(args[1]);
        const artifact = artifactWithName(escapedArtifactName);

        if(artifact === undefined) return;
        
        let message = '[' + artifact.translatedName+ ']\nValue: ' + artifact.artifact.value;
        msg.reply(message);
    }
    
}