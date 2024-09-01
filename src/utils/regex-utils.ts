export class RegexUtils {
    public static regex(input: string): RegExp {
        let match = input.match(/^\/(.*)\/([^/]*)$/);
        if (!match) {
            return;
        }

        return new RegExp(match[1], match[2]);
    }

    public static escapeRegex(input: string): string {
        return input?.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    
    public static isWrappedWithStar(input: string): boolean {
        const regex = /^\*[^*]+\*$/;
        return regex.test(input);
    }

    public static splitDiscordTrigger(trigger: string): string[] {
        const regex = /(?:[^\s"]+|"[^"]*")+/g;
        const matches = trigger.match(regex);
        return matches ? matches.map(arg => arg.replace(/(^"|"$)/g, '')) : [];
    }
    
    public static escapeDoubleQuotes(input: string): string {
        const regex = /"([^"]*)"/g;
        return regex.exec(input)[1];
    }

    public static discordId(input: string): string {
        return input?.match(/\b\d{17,20}\b/)?.[0];
    }

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
