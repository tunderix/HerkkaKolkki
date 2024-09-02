import { escapeMarkdown } from 'discord.js';
import removeMarkdown from 'remove-markdown';

/**
 * Utility class for various string operations.
 */
export class StringUtils {
    /**
     * Removes all double quotes from a string.
     *
     * @param str - The string to process.
     * @returns The string without double quotes.
     */
    public static escapeDoubleQuotes = (str: string): string => {
        return str.replace(/"/g, '');
    };

    /**
     * Truncates a string to a specified length, optionally adding ellipsis.
     *
     * @param input - The string to truncate.
     * @param length - The maximum length of the truncated string.
     * @param addEllipsis - Whether to add ellipsis (...) if the string is truncated.
     * @returns The truncated string.
     */
    public static truncate(input: string, length: number, addEllipsis: boolean = false): string {
        if (input.length <= length) {
            return input;
        }

        let output = input.substring(0, addEllipsis ? length - 3 : length);
        if (addEllipsis) {
            output += '...';
        }

        return output;
    }

    /**
     * Escapes Markdown syntax in a string.
     *
     * @param input - The string to escape.
     * @returns The string with Markdown syntax escaped.
     */
    public static escapeMarkdown(input: string): string {
        return (
            escapeMarkdown(input)
                // Unescapes custom emojis
                // TODO: Update once discord.js updates their escapeMarkdown()
                // See https://github.com/discordjs/discord.js/issues/8943
                .replaceAll(
                    /<(a?):(\S+):(\d{17,20})>/g,
                    (_match, animatedPrefix, emojiName, emojiId) => {
                        let emojiNameUnescaped = emojiName.replaceAll(/\\/g, '');
                        return `<${animatedPrefix}:${emojiNameUnescaped}:${emojiId}>`;
                    }
                )
        );
    }

    /**
     * Removes Markdown syntax from a string.
     *
     * @param input - The string to process.
     * @returns The string without Markdown syntax.
     */
    public static stripMarkdown(input: string): string {
        return removeMarkdown(input);
    }
}