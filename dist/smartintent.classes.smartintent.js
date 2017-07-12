"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * represents an intent. Concrete Intents are instances of SmartIntent
 */
class SmartIntent {
    constructor(intentData) {
        // TODO:
    }
}
exports.SmartIntent = SmartIntent;
/**
 * Actions for an SmartIntent are instances of this class
 */
class IntentAction {
    constructor(intentMethod) {
        // TODO:
    }
}
exports.IntentAction = IntentAction;
/**
 * Factory for SmartIntents
 */
class IntentFactory {
    static createIntentFromInput(inputString) {
        // TODO:
    }
    static registerIntent(smartIntentArg) {
        // TODO:
    }
}
IntentFactory.registeredIntents = [];
exports.IntentFactory = IntentFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpbnRlbnQuY2xhc3Nlcy5zbWFydGludGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aW50ZW50LmNsYXNzZXMuc21hcnRpbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQTs7R0FFRztBQUNIO0lBV0UsWUFBYSxVQUFVO1FBQ3JCLFFBQVE7SUFDVixDQUFDO0NBQ0Y7QUFkRCxrQ0FjQztBQUVEOztHQUVHO0FBQ0g7SUFDRSxZQUFhLFlBQTJCO1FBQ3RDLFFBQVE7SUFDVixDQUFDO0NBQ0Y7QUFKRCxvQ0FJQztBQUVEOztHQUVHO0FBQ0g7SUFFUyxNQUFNLENBQUMscUJBQXFCLENBQUUsV0FBVztRQUM5QyxRQUFRO0lBQ1YsQ0FBQztJQUNNLE1BQU0sQ0FBQyxjQUFjLENBQUUsY0FBMkI7UUFDdkQsUUFBUTtJQUNWLENBQUM7O0FBTmMsK0JBQWlCLEdBQWtCLEVBQUUsQ0FBQTtBQUR0RCxzQ0FRQyJ9