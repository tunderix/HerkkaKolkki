import ITriggerCommand from '../types/ITriggerCommand.js';
import ITriggerArgument from '../types/ITriggerArgument.js';

/**
 * Utility class for handling trigger commands and arguments.
 */
class TriggerUtils {
    /**
     * Checks if the given trigger word matches the command's trigger word or any of its optional trigger words.
     * @param command - The command to check.
     * @param word - The trigger word to match.
     * @returns True if the word matches the command's trigger word or any optional trigger words, false otherwise.
     */
    static MatchesTriggerWord(command: ITriggerCommand, word: string): boolean {
        return command.triggerWord === word || (command.optionalTriggerWords?.includes(word) ?? false);
    }

    /**
     * Compares two arrays of trigger arguments for equality.
     * @param array1 - The first array of trigger arguments.
     * @param array2 - The second array of trigger arguments.
     * @returns True if both arrays are equal, false otherwise.
     */
    static MatchesCommandArray(array1: ITriggerArgument[], array2: ITriggerArgument[]): boolean {
        if (array1.length !== array2.length) return false;
        return array1.every((arg, index) => this.MatchesArgument(arg, array2[index]));
    }

    /**
     * Compares two trigger arguments for equality.
     * @param arg1 - The first trigger argument.
     * @param arg2 - The second trigger argument.
     * @returns True if both arguments are equal, false otherwise.
     */
    static MatchesArgument(arg1: ITriggerArgument, arg2: ITriggerArgument): boolean {
        return arg1.argument === arg2.argument &&
            arg1.isUserVariable === arg2.isUserVariable &&
            (arg1.optionalArguments?.length === arg2.optionalArguments?.length) &&
            (arg1.optionalArguments?.every((optArg, index) => optArg === arg2.optionalArguments?.[index]) ?? true);
    }

    /**
     * Compares two trigger commands for equality.
     * @param command1 - The first trigger command.
     * @param command2 - The second trigger command.
     * @returns True if both commands are equal, false otherwise.
     */
    static MatchesCommand(command1: ITriggerCommand, command2: ITriggerCommand): boolean {
        return command1.triggerWord === command2.triggerWord &&
            command1.category === command2.category &&
            this.MatchesCommandArray(command1.commandArray, command2.commandArray) &&
            (command1.optionalTriggerWords?.length === command2.optionalTriggerWords?.length) &&
            (command1.optionalTriggerWords?.every((word, index) => word === command2.optionalTriggerWords?.[index]) ?? true);
    }

    /**
     * Finds a command in the manifest by its trigger word.
     * @param manifest - The manifest containing the commands.
     * @param word - The trigger word to search for.
     * @returns The command that matches the trigger word, or undefined if no match is found.
     */
    static FindCommandByTriggerWord(manifest: Record<string, ITriggerCommand>, word: string): ITriggerCommand | undefined {
        return Object.values(manifest).find(command => this.MatchesTriggerWord(command, word));
    }
}