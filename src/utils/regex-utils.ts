/**
 * Utility class for various regular expression operations.
 */
export class RegexUtils {
    /**
     * Converts a string representation of a regular expression to a RegExp object.
     *
     * @param input - The string representation of the regular expression.
     * @returns The RegExp object or undefined if the input is not a valid regex string.
     */
    public static regex(input: string): RegExp {
        let match = input.match(/^\/(.*)\/([^/]*)$/);
        if (!match) {
            return;
        }

        return new RegExp(match[1], match[2]);
    }

    /**
     * Escapes special characters in a string to be used in a regular expression.
     *
     * @param input - The string to escape.
     * @returns The escaped string.
     */
    public static escapeRegex(input: string): string {
        return input?.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    /**
     * Splits a Discord trigger string into an array of arguments.
     *
     * @param trigger - The trigger string to split.
     * @returns An array of arguments.
     */
    public static splitDiscordTrigger(trigger: string): string[] {
        const regex = /(?:[^\s"]+|"[^"]*")+/g;
        const matches = trigger.match(regex);
        return matches ? matches.map(arg => arg.replace(/(^"|"$)/g, '')) : [];
    }

    /**
     * Checks if a string is wrapped with asterisks.
     *
     * @param str - The string to check.
     * @returns True if the string is wrapped with asterisks, false otherwise.
     */
    public static isWrappedWithAsterisks(str: string): boolean {
        const regex = /^\*.*\*$/;
        return regex.test(str);
    }

    /**
     * Extracts the content within double quotes from a string.
     *
     * @param input - The string containing double quotes.
     * @returns The content within the double quotes.
     */
    public static escapeDoubleQuotes(input: string): string {
        const regex = /"([^"]*)"/g;
        return regex.exec(input)[1];
    }

    /**
     * Removes wrapping asterisks from a string.
     *
     * @param str - The string to process.
     * @returns The string without wrapping asterisks.
     */
    public static escapeAsterisks(str: string): string {
        const regex = /^\*(.*)\*$/;
        const match = str.match(regex);
        return match ? match[1] : str;
    }

    /**
     * Extracts a Discord ID from a string.
     *
     * @param input - The string containing the Discord ID.
     * @returns The extracted Discord ID.
     */
    public static discordId(input: string): string {
        return input?.match(/\b\d{17,20}\b/)?.[0];
    }

    /**
     * Extracts the username, tag, and discriminator from a Discord tag string.
     *
     * @param input - The string containing the Discord tag.
     * @returns An object containing the username, tag, and discriminator.
     */
    public static tag(input: string): { username: string; tag: string; discriminator: string } {
        let match = input.match(/\b(.+)#([\d]{4})\b/);
        if (!match) {
            return;
        }

        return {
            tag: match[0],
            username: match[1],
            discriminator: match[2],
        };
    }
}