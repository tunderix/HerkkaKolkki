import { Message } from 'discord.js';
import {ArtifactsBySlot, ArtifactWithName} from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import messageIsMatchForTriggers, {
    indexForValueArgument,
    valueFromMsgContent
} from "../helpers/HeroesTriggerHelpers.js";
import InventorySlot from "../../heroes/types/InventorySlot.js";

export class ArtifactsBySlotTrigger implements IHeroesArguments, Trigger {
    triggerWords = HeroesTriggers.artifactsBySlot;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const indexToLookFor = indexForValueArgument(this.triggerWords);
        const slotName = valueFromMsgContent(msg, indexToLookFor);
        const artifacts = ArtifactsBySlot(InventorySlot[slotName]);
        let message:string = "["
        artifacts.forEach(a => {
            message += a.translatedName;
            message += ","
        })
        message += "]"
        msg.reply(message);
    }
}