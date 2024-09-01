export default interface IHeroesArguments {
    heroesArgs: string[];
    triggerWords: string[];
    heroesArgsValid(triggerArgs: string[]): boolean;
}