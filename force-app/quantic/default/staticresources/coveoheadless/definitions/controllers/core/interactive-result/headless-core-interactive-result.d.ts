import { Result } from '../../../api/search/search/result';
import { CoreEngine } from '../../..';
export interface InteractiveResultCoreOptions {
    /**
     * The query result.
     */
    result: Result;
    /**
     * The amount of time to wait before selecting the result after calling `beginDelayedSelect`.
     *
     * @defaultValue `1000`
     */
    selectionDelay?: number;
    /**
     * The number of seconds for which the debounced function should continue catching subsequent calls.
     *
     * @defaultValue `1000`
     */
    debounceWait?: number;
}
export interface InteractiveResultCoreProps {
    /**
     * The options for the result controller core.
     */
    options: InteractiveResultCoreOptions;
}
/**
 * The `InteractiveResultCore` manages common functionality for interactive result controllers.
 */
export interface InteractiveResultCore {
    /**
     * Selects the result, logging a UA event to the Coveo Platform if the result wasn't selected before.
     *
     * In a DOM context, it's recommended to call this method on all of the following events:
     * * `contextmenu`
     * * `click`
     * * `mouseup`
     * * `mousedown`
     */
    select(): void;
    /**
     * Prepares to select the result after a certain delay, sending analytics if it was never selected before.
     *
     * In a DOM context, it's recommended to call this method on the `touchstart` event.
     */
    beginDelayedSelect(): void;
    /**
     * Cancels the pending selection caused by `beginDelayedSelect`.
     *
     * In a DOM context, it's recommended to call this method on the `touchend` event.
     */
    cancelPendingSelect(): void;
}
/**
 * Creates the result controller core.
 *
 * @param engine - The headless engine.
 * @param props - The configurable controller properties.
 * @param action - The action to be triggered on select.
 * @returns A controller core instance.
 */
export declare function buildInteractiveResultCore(engine: CoreEngine, props: InteractiveResultCoreProps, action: () => void): InteractiveResultCore;
