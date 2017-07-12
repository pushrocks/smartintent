import * as plugins from './smartintent.plugins'

export interface IIntentMethod {
  <T>(): Promise<T>
}

/**
 * represents an intent. Concrete Intents are instances of SmartIntent
 */
export class SmartIntent {
  /**
   * the attributed action
   */
  action: IntentAction

  /**
   * everything one needs to know for an action to be carried out
   */
  intentData: any

  constructor (intentData) {
    // TODO:
  }
}

/**
 * Actions for an SmartIntent are instances of this class
 */
export class IntentAction {
  constructor (intentMethod: IIntentMethod) {
    // TODO:
  }
}

/**
 * Factory for SmartIntents
 */
export class IntentFactory {
  private static registeredIntents: SmartIntent[] = []
  public static createIntentFromInput (inputString) {
    // TODO:
  }
  public static registerIntent (smartIntentArg: SmartIntent) {
    // TODO:
  }
}
