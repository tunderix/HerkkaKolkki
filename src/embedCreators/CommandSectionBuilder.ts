import { generateCommandString } from '../triggers/helpers/HeroesTriggerHelpers.js';
import ITriggerCommand from '../triggers/types/ITriggerCommand.js';

/**
 * Class for building command sections and rows.
 */
export class CommandSectionBuilder {
    /**
     * Constructs a header row for the given category.
     *
     * @param category - The category to construct the header for.
     * @returns The constructed header row.
     */
    constructHeaderRowFor(category: string): string {
        return `**${category}**`;
    }

    /**
     * Constructs a trigger row for the given trigger command.
     *
     * @param triggerCommand - The trigger command to construct the row for.
     * @returns The constructed trigger row.
     */
    constructTriggerRowFor(triggerCommand: ITriggerCommand): string {
        return generateCommandString(triggerCommand);
    }

    /**
     * Constructs a section string for a specific category header.
     *
     * @param categoryHeader - The category header to filter triggers.
     * @param triggers - The triggers to construct the section from.
     * @returns The constructed section string.
     */
    constructSectionFor(categoryHeader: string, triggers: Record<string, ITriggerCommand>): string {
        //const headerRow = this.constructHeaderRowFor(categoryHeader);

        let sectionString = '\n';
        for (const trigger of Object.values(triggers)) {
            if (trigger.category === categoryHeader) {
                const row = this.constructTriggerRowFor(trigger);
                sectionString += row + '\n';
            }
        }
        return sectionString.trim();
    }
}