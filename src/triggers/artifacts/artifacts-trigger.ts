import IHeroesArguments from "../types/IHeroesArguments";
import {Trigger} from "../trigger";
import { Message } from "discord.js";
import { EventData } from "../../models/internal-models";
import HeroesTriggers from "../heroes-trigger-templates.js";
import Utils, {messageIsMatchForTriggers} from "../helpers/HeroesTriggerHelpers.js";
import {Artifacts} from "../../heroes/parseMethods/artifacts.js";

export class ArtifactsTrigger implements IHeroesArguments, Trigger {
    triggerWords = HeroesTriggers.artifacts;
    requireGuild: false;
    
    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }
    
    public async execute(msg: Message, data: EventData): Promise<void> {
        msg.reply('There are [' + Artifacts.length + '] artifacts in game.');
    }
}