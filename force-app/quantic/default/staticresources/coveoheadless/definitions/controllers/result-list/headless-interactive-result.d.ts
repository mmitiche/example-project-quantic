import { SearchEngine } from '../../app/search-engine/search-engine';
import { InteractiveResultCore, InteractiveResultCoreOptions, InteractiveResultCoreProps } from '../core/interactive-result/headless-core-interactive-result';
export interface InteractiveResultOptions extends InteractiveResultCoreOptions {
}
export interface InteractiveResultProps extends InteractiveResultCoreProps {
    /**
     * The options for the `InteractiveResult` controller.
     * */
    options: InteractiveResultOptions;
}
/**
 * The `InteractiveResult` controller provides an interface for triggering desirable side effects, such as logging UA events to the Coveo Platform, when a user selects a query result.
 */
export interface InteractiveResult extends InteractiveResultCore {
}
/**
 * Creates an `InteractiveResult` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `InteractiveResult` properties.
 * @returns An `InteractiveResult` controller instance.
 */
export declare function buildInteractiveResult(engine: SearchEngine, props: InteractiveResultProps): InteractiveResult;
