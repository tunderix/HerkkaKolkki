import ITriggerArgument from './ITriggerArgument.js';

export default interface ITriggerCommand {
    triggerWord: string;
    category: string;
    commandArray: ITriggerArgument[];
    optionalTriggerWords?: string[];
}

