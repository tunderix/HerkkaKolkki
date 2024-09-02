import {RegexUtils, StringUtils} from "../../utils/index.js";
import {Message} from "discord.js";

/**
 * Checks if a Discord message matches the specified trigger commands.
 *
 * @param discordMessageArguments - The arguments from the Discord message.
 * @param triggerCommands - The trigger commands to match against.
 * @returns `true` if the message matches the trigger commands, otherwise `false`.
 */
export const doesMessageMatchTrigger = (discordMessageArguments: string[], triggerCommands: string[]): boolean => {

    // Does discord message have exact amount of args that the trigger has?
    if(discordMessageArguments.length !== triggerCommands.length) {
        return false;
    }

    let isValid = true;
    triggerCommands.forEach((triggerWord, index) => {
        const triggerWordIsParameter = RegexUtils.isWrappedWithAsterisks(triggerWord);
        if(!triggerWordIsParameter){
            const discordMatchesTriggerWord = discordMessageArguments[index] === triggerWord
            if(!discordMatchesTriggerWord) isValid = false;
        }
    })

    return isValid;
}

/**
 * Determines if a Discord message matches the specified trigger commands.
 *
 * @param msg - The Discord message object.
 * @param triggerCommands - The trigger commands to match against.
 * @returns `true` if the message matches the trigger commands, otherwise `false`.
 */
export const messageIsMatchForTriggers = (msg: Message, triggerCommands: string[]): boolean => {
    const msgWithoutSlash = msg.content.slice(1);
    const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);
    return doesMessageMatchTrigger(args, triggerCommands);
}

export const valueFromMsgContent = (msg: Message, index: number) => {
    const msgWithoutSlash = msg.content.slice(1);
    const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);
    return args[index];
}

//find and return the index of first argument which is wrapped with **
export const indexForValueArgument = (triggers: string[]) : number => {
    return triggers.findIndex((a) => RegexUtils.isWrappedWithAsterisks(a));
}

export default messageIsMatchForTriggers;