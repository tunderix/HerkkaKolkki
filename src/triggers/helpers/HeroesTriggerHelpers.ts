import { RegexUtils } from '../../utils/index.js';
import { Message } from 'discord.js';
import ITriggerCommand from '../types/ITriggerCommand.js';
import ITriggerArgument from '../types/ITriggerArgument.js';
import HeroesTriggers from '../trigger-manifest.js';


/**
 * Checks if a message matches the given trigger command.
 *
 * @param msg - The message to check.
 * @param triggerCommand - The trigger command to match against.
 * @returns True if the message matches the trigger command, false otherwise.
 */
/*
export const messageIsMatchForTriggers = (msg: Message, triggerCommand: ITriggerCommand): boolean => {
    const msgWithoutSlash = msg.content.slice(1);
    const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);

    // Store triggers with the same trigger word
    const matchingTriggers = Object.values(HeroesTriggers).filter(trigger =>
        trigger.triggerWord === triggerCommand.triggerWord && trigger.triggerWord === args[0] && triggerCommand.commandArray.length === args.length - 1,
    );

    // We know its the right command now.
    if (matchingTriggers.length !== 0) {
        const theTriggerLength = triggerCommand.commandArray.length;
        const newMatches = matchingTriggers.filter(t => t.commandArray.length === theTriggerLength);

        // Guard whether there are other matches with same amount of args
        if (newMatches.length === 1) {
            if (newMatches[0].commandArray.length < 1) return true;
            if (newMatches[0].commandArray[0].argument === args[1]) return true;
            return false;
        }

        //make sure trigger arguments match
        newMatches.forEach(m => {
            if (m.commandArray[0] === triggerCommand.commandArray[0]) {
                const triggerWithRightCommandArg = newMatches.find(m => m.commandArray[0].argument === args[1]);
                if (triggerCommand.commandArray[0].argument === args[1]) {
                    return true;
                }
                return false;
            }
        });

        return false;
    }

    for (let i = 0; i < matchingTriggers.length - 1; i++) {

    }

    matchingTriggers.forEach(t => {
        const triggerwordMatchesArgs = t.triggerWord === args[0];
        const commandArrayEmpty = t.commandArray.length === 0;
        const triggerCommandEqualsTriggerWord = t.triggerWord === triggerCommand.triggerWord;

    });

    return false;
};
*/


/**
 * Checks if a message matches the given trigger command.
 *
 * @param msg - The message to check.
 * @param triggerCommand - The trigger command to match against.
 * @returns True if the message matches the trigger command, false otherwise.
 */
export const messageIsMatchForTriggers = (msg: Message, triggerCommand: ITriggerCommand): boolean => {
    const msgWithoutSlash = msg.content.slice(1);
    const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);

    if (args[0] !== triggerCommand.triggerWord) {
        return false;
    }

    const commandArgs = args.slice(1);
    if (commandArgs.length !== triggerCommand.commandArray.length) {
        return false;
    }

    return commandArgs.every((arg, index) => {
        const commandArg = triggerCommand.commandArray[index];
        if (commandArg.isUserVariable) {
            // If it's a user variable, it should not match any predefined argument
            // TODO - HERE BE DRAGONS, NAIIVE....
            return !triggerCommand.commandArray.some(cmdArg => !cmdArg.isUserVariable && cmdArg.argument === arg);
        } else {
            // Otherwise, it must match the fixed argument exactly
            return commandArg.argument === arg;
        }
    });
};


/**
 * Extracts the value from the message content at the specified index.
 *
 * @param msg - The message to extract the value from.
 * @param index - The index of the value to extract.
 * @returns The extracted value.
 */
export const valueFromMsgContent = (msg: Message, index: number): string => {
    const msgWithoutSlash = msg.content.slice(1);
    const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);
    return args[index];
};

/**
 * Finds and returns the index of the first user-defined variable in the command array.
 *
 * @param commandArray - The array of command arguments.
 * @returns The index of the first user-defined variable.
 */
export const indexForValueArgument = (commandArray: ITriggerArgument[]): number => {
    return commandArray.findIndex((command) => command.isUserVariable);
};

/**
 * Finds the index of the first user-defined variable in the command array and extracts its value from the message content.
 *
 * @param msg - The message to extract the value from.
 * @param commandArray - The array of command arguments.
 * @returns The value of the first user-defined variable.
 */
export const getUserVariableValue = (msg: Message, commandArray: ITriggerArgument[]): string | null => {
    const index = commandArray.findIndex((command) => command.isUserVariable);
    if (index === -1) {
        return null; // No user-defined variable found
    }
    const msgWithoutSlash = msg.content.slice(1);
    const args = RegexUtils.splitDiscordTrigger(msgWithoutSlash);
    return args[index + 1]; // +1 to account for the command itself
};

/**
 * Generates a formatted command string for a given trigger command.
 *
 * @param command - The trigger command to format.
 * @returns A formatted command string.
 */
export const generateCommandString = (command: ITriggerCommand): string => {
    let commandString = '> /' + command.triggerWord + ' ';
    command.commandArray.forEach(arg => {
        commandString += arg.isUserVariable ? `*${arg.argument}* ` : `${arg.argument} `;
    });
    return commandString.trim();
};

/**
 * Constructs fields for embed based on unique categories and their commands.
 *
 * @returns A string with formatted commands for each category.
 */
export const constructFieldsForEmbed = (): string => {
    const manifest = HeroesTriggers;
    const uniqueCategories = Array.from(new Set(Object.values(manifest).map(arr => arr.category)));
    let fieldString = '';

    uniqueCategories.forEach(category => {
        Object.values(manifest).forEach(command => {
            if (command.category === category) {
                fieldString += generateCommandString(command) + '\n';
            }
        });
    });

    return fieldString.trim();
};

export default messageIsMatchForTriggers;