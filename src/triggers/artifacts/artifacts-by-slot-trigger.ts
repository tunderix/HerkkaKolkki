import { Message } from 'discord.js';
import { ArtifactsBySlot } from '../../heroes/parseMethods/artifacts.js';
import { EventData } from '../../models/internal-models';
import { Trigger } from '../trigger';
import IHeroesArguments from '../types/IHeroesArguments.js';
import HeroesTriggers from '../trigger-manifest.js';
import messageIsMatchForTriggers, { getUserVariableValue } from '../helpers/HeroesTriggerHelpers.js';
import InventorySlot from '../../heroes/types/InventorySlot.js';

export class ArtifactsBySlotTrigger implements IHeroesArguments, Trigger {
    triggerWord = HeroesTriggers.artifactsBySlot;
    requireGuild: false;

    triggered(msg: Message): boolean {
        return messageIsMatchForTriggers(msg, this.triggerWord);
    }

    public async execute(msg: Message, data: EventData): Promise<void> {
        const slotName = getUserVariableValue(msg, this.triggerWord.commandArray);

        if (!slotName) {
            msg.reply('Slot name not provided.');
            return;
        }

        const artifacts = ArtifactsBySlot(InventorySlot[slotName]);
        let message: string = '[';
        artifacts.forEach(a => {
            message += a.translatedName;
            message += ',';
        });
        message += ']';
        msg.reply(message);
    }
}