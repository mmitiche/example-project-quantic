import { PayloadAction } from '@reduxjs/toolkit';
import { CoreEngine } from '../../app/engine';
import { SortCriterion } from './sort';
/**
 * The sort action creators.
 */
export interface SortActionCreators {
    /**
     * Initializes the sort query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria).
     *
     * @param criterion - The initial sort.
     * @returns A dispatchable action.
     */
    registerSortCriterion(criterion: SortCriterion): PayloadAction<SortCriterion>;
    /**
     * Updates the sort query parameter. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/cloud-v2-developers/query-parameters#RestQueryParameters-sortCriteria).
     *
     * @param criterion - The sort to set.
     * @returns A dispatchable action.
     */
    updateSortCriterion(criterion: SortCriterion): PayloadAction<SortCriterion>;
}
/**
 * Loads the `sort` reducer and returns possible action creators.
 *
 * @param engine - The headless engine.
 * @returns An object holding the action creators.
 */
export declare function loadSortActions(engine: CoreEngine): SortActionCreators;
