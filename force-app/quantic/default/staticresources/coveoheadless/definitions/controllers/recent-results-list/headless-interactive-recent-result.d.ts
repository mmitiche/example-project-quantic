import { SearchEngine } from '../../app/search-engine/search-engine';
import { InteractiveResultCore, InteractiveResultCoreOptions, InteractiveResultCoreProps } from '../core/interactive-result/headless-core-interactive-result';
export interface InteractiveRecentResultOptions extends InteractiveResultCoreOptions {
}
export interface InteractiveRecentResultProps extends InteractiveResultCoreProps {
    /**
     * The options for the `InteractiveResult` controller.
     */
    options: InteractiveRecentResultOptions;
}
/**
 * The `InteractiveRecentResult` controller provides an interface for triggering desirable side effects, such as logging UA events to the Coveo Platform, when a user selects a recent query result.
 */
export interface InteractiveRecentResult extends InteractiveResultCore {
}
/**
 * Creates an `InteractiveRecentResult` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `InteractiveRecentResult` properties.
 * @returns An `InteractiveRecentResult` controller instance.
 */
export declare function buildInteractiveRecentResult(engine: SearchEngine, props: InteractiveRecentResultProps): InteractiveRecentResult;
