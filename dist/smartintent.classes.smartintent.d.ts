export interface IIntentMethod {
    <T>(): Promise<T>;
}
/**
 * represents an intent. Concrete Intents are instances of SmartIntent
 */
export declare class SmartIntent {
    /**
     * the attributed action
     */
    action: IntentAction;
    /**
     * everything one needs to know for an action to be carried out
     */
    intentData: any;
    constructor(intentData: any);
}
/**
 * Actions for an SmartIntent are instances of this class
 */
export declare class IntentAction {
    constructor(intentMethod: IIntentMethod);
}
/**
 * Factory for SmartIntents
 */
export declare class IntentFactory {
    private static registeredIntents;
    static createIntentFromInput(inputString: any): void;
    static registerIntent(smartIntentArg: SmartIntent): void;
}
