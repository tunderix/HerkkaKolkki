import { Message } from 'discord.js';
import { EventData } from '../../models/internal-models';
import messageIsMatchForTriggers from '../helpers/HeroesTriggerHelpers.js';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../trigger-manifest.js';
import InventorySlot from '../../heroes/types/InventorySlot.js';

export class ArtifactSlotsTrigger implements IHeroesArguments, Trigger {
    requireGuild = false;
    triggerWord = HeroesTriggers.inventorySlots;

    triggered(msg: Message): boolean {
        const temp = messageIsMatchForTriggers(msg, this.triggerWord);
        return temp;
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const values = Object.values(InventorySlot);
        msg.reply(values.toString());
    }
}