import { CaseAssistEngine } from '../../case-assist.index';
import { InteractiveResultCore, InteractiveResultCoreOptions, InteractiveResultCoreProps } from '../core/interactive-result/headless-core-interactive-result';
export interface CaseAssistInteractiveResultOptions extends InteractiveResultCoreOptions {
}
export interface CaseAssistInteractiveResultProps extends InteractiveResultCoreProps {
    /**
     * The options for the `CaseAssistInteractiveResult` controller.
     * */
    options: CaseAssistInteractiveResultOptions;
}
/**
 * The `CaseAssistInteractiveResult` controller provides an interface for triggering desirable side effects, such as logging UA events to the Coveo Platform, when a user selects a query result.
 */
export interface CaseAssistInteractiveResult extends InteractiveResultCore {
}
/**
 * Creates a `CaseAssistInteractiveResult` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `CaseAssistInteractiveResult` properties.
 * @returns A `CaseAssistInteractiveResult` controller instance.
 */
export declare function buildCaseAssistInteractiveResult(engine: CaseAssistEngine, props: CaseAssistInteractiveResultProps): CaseAssistInteractiveResult;
