import { Controller } from '../controller/headless-controller';
import { QueryCorrection, WordCorrection } from '../../api/search/search/query-corrections';
import { SearchEngine } from '../../app/search-engine/search-engine';
export type { QueryCorrection, WordCorrection };
export interface DidYouMean extends Controller {
    /**
     * Apply query correction using the query correction, if any, currently present in the state.
     */
    applyCorrection(): void;
    /**
     * The state of the `DidYouMean` controller.
     */
    state: DidYouMeanState;
}
export interface DidYouMeanState {
    /**
     * The correction that was applied to the query. If no correction was applied, will default to an empty string.
     */
    wasCorrectedTo: string;
    /**
     * The original query that was performed, without any automatic correction applied.
     */
    originalQuery: string;
    /**
     * Specifies if the query was automatically corrected by Headless.
     *
     * This happens when there is no result returned by the API for a particular mispelling.
     */
    wasAutomaticallyCorrected: boolean;
    /**
     * The query correction that is currently applied by the "did you mean" module.
     */
    queryCorrection: QueryCorrection;
    /**
     * Specifies if there is a query correction to apply.
     */
    hasQueryCorrection: boolean;
}
/**
 * The DidYouMean controller is responsible for handling query corrections.
 * When a query returns no result but finds a possible query correction, the controller either suggests the correction or
 * automatically triggers a new query with the suggested term.
 *
 * @param engine - The headless engine.
 */
export declare function buildDidYouMean(engine: SearchEngine): DidYouMean;
