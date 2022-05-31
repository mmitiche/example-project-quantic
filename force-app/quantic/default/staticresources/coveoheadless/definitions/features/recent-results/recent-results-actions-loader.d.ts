import { PayloadAction } from '@reduxjs/toolkit';
import { SearchEngine } from '../../app/search-engine/search-engine';
import { RegisterRecentResultsCreatorPayload } from './recent-results-actions';
import { Result } from '../../api/search/search/result';
/**
 * The RecentResults action creators
 */
export interface RecentResultsActionCreators {
    /**
     * Initialize the `recentResults` state.
     * @param payload (RegisterRecentResultsCreatorPayload) The initial state and options.
     */
    registerRecentResults(payload: RegisterRecentResultsCreatorPayload): PayloadAction<RegisterRecentResultsCreatorPayload>;
    /**
     * Clear the recent results list.
     */
    clearRecentResults(): PayloadAction;
    /**
     * Add the recent result to the list.
     * @param payload (Result) The result to add.
     */
    pushRecentResult(payload: Result): PayloadAction<Result>;
}
/**
 * Loads the `recentresults` reducer and returns possible action creators.
 *
 * @param engine - The headless engine.
 * @returns An object holding the action creators.
 */
export declare function loadRecentResultsActions(engine: SearchEngine): RecentResultsActionCreators;
