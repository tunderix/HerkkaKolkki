import djs, { ChatInputCommandInteraction, ModalSubmitInteraction, PermissionsString } from 'discord.js';
import { createRequire } from 'node:module';
import os from 'node:os';
import typescript from 'typescript';
import { HeroesCommandName } from '../../enums/heroes-command-name.js';

import { DevCommandName } from '../../enums/index.js';
import parseAllArtifacts from '../../heroes/parseMethods/artifacts.js';
import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { FormatUtils, InteractionUtils, ShardUtils } from '../../utils/index.js';
import { Command, CommandDeferType } from '../index.js';

const require = createRequire(import.meta.url);
let Config = require('../../../config/config.json');
let TsConfig = require('../../../tsconfig.json');

export class HeroesCommand implements Command {
    public names = [Lang.getRef('chatCommands.heroes', Language.Default)];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        
        if (!Config.developers.includes(intr.user.id)) {
            await InteractionUtils.send(intr, Lang.getEmbed('validationEmbeds.devOnly', data.lang));
            return;
        }

        let args = {
            command: intr.options.getString(
                Lang.getRef('arguments.command', Language.Default)
            ) as HeroesCommandName,
        };

        switch (args.command) {
            case HeroesCommandName.ALL_ARTIFACTS: {
                const artifacts = parseAllArtifacts();
                await InteractionUtils.send(
                    intr,
                    Lang.getEmbed('displayEmbeds.heroesAllArtifacts', data.lang, {
                        ALL_ARTIFACTS: artifacts.toString()
                    })
                );
                break;
            }
            case HeroesCommandName.FIND_ARTIFACT: {
                await InteractionUtils.send(
                    intr,
                    Lang.getEmbed('displayEmbeds.heroesAllArtifacts', data.lang, {})
                );
                break;
            }
            default: {
                return;
            }
        }
    }
}
