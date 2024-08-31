import { Message } from 'discord.js';
import { artifactsContaining } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';

export class ArtifactsTrigger implements Trigger {
    requireGuild = false;
    
    triggered(msg: Message): boolean {
        const args = msg.content.split(" ");
        return args[0] === "/heroe" && args[1] === "artifacts";
    }
    public async execute(msg: Message, data: EventData): Promise<void> {
        const args = msg.content.split(" ");
        
        // make sure there is something after two parameters.
        if(args.length < 3) {
            return;
        }
        
        // Make sure the content after second param is in form:
        // "Magic Arrow"
        
        // Take off prefixes
        const artifactName = msg.content.replace(args[0] + " " + args[1], "");
        
        // make sure rest are inside ""
        const regex = /"([^"]*)"/g;
        const aName = regex.exec(artifactName)
        
        const artifacts = artifactsContaining(aName[1]);
        
        let message = "Artifacts containing [" + aName[1] + "] are: "
        artifacts.forEach(a => {
            message += a.translatedName;
            message += ", "
        });
        
        msg.reply(message.slice(0, -2));
    }
    
}