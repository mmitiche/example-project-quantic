/**
 * A trigger is an action that the interface will perform (show a message, execute a function, redirect users) depending on the query that was performed.<br/>
 * A trigger that can be configured in the Coveo Query Pipeline.
 */
export declare type Trigger = TriggerNotify | TriggerRedirect | TriggerQuery | TriggerExecute;
/**
 * Notify (show a message) to a user
 */
export interface TriggerNotify {
    type: 'notify';
    content: string;
}
export declare function isNotifyTrigger(trigger: Trigger): trigger is TriggerNotify;
/**
 * Redirect the user to another url
 */
export interface TriggerRedirect {
    type: 'redirect';
    content: string;
}
export declare function isRedirectTrigger(trigger: Trigger): trigger is TriggerRedirect;
/**
 * Perform a new query with a different query expression
 */
export interface TriggerQuery {
    type: 'query';
    content: string;
}
export declare function isQueryTrigger(trigger: Trigger): trigger is TriggerQuery;
/**
 * Execute a javascript function present in the page.
 */
export interface TriggerExecute {
    type: 'execute';
    content: {
        name: string;
        params: ExecuteTriggerParams;
    };
}
/**
 * The type of the parameters for a Trigger Execute object.
 */
export declare type ExecuteTriggerParams = (string | number | boolean)[];
export declare function isExecuteTrigger(trigger: Trigger): trigger is TriggerExecute;
