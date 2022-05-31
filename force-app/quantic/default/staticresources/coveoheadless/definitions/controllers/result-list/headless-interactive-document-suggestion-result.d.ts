import { CaseAssistEngine } from '../../case-assist.index';
import { InteractiveResultCore, InteractiveResultCoreOptions, InteractiveResultCoreProps } from '../core/interactive-result/headless-core-interactive-result';
export interface InteractiveDocumentSuggestionResultOptions extends InteractiveResultCoreOptions {
}
export interface InteractiveDocumentSuggestionResultProps extends InteractiveResultCoreProps {
    /**
     * The options for the `InteractiveResult` controller.
     * */
    options: InteractiveDocumentSuggestionResultOptions;
}
/**
 * The `InteractiveResult` controller provides an interface for triggering desirable side effects, such as logging UA events to the Coveo Platform, when a user selects a query result.
 */
export interface InteractiveDocumentSuggestionResult extends InteractiveResultCore {
}
/**
 * Creates an `InteractiveResult` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `InteractiveResult` properties.
 * @returns An `InteractiveResult` controller instance.
 */
export declare function buildInteractiveDocumentSuggestionResult(engine: CaseAssistEngine, props: InteractiveDocumentSuggestionResultProps): InteractiveDocumentSuggestionResult;
