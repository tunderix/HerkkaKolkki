import { Message } from 'discord.js';
import { EventData } from '../../models/internal-models';
import messageIsMatchForTriggers from '../helpers/HeroesTriggerHelpers.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../heroes-trigger-templates.js';
import InventorySlot from "../../heroes/types/InventorySlot.js";

export class ArtifactSlotsTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;
    triggerWords = HeroesTriggers.inventorySlots;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWords);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const values = Object.values(InventorySlot);
        msg.reply(values.toString());
    }
}