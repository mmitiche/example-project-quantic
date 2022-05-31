import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
import { Result } from '../../api/search/search/result';
export interface RecentResultsListProps {
    /**
     * The initial state that should be applied to the `RecentResultsList` controller.
     */
    initialState?: RecentResultsListInitialState;
    /**
     * The configuration options that should be applied to the `RecentResultsList` controller.
     */
    options?: RecentResultsListOptions;
}
export interface RecentResultsListInitialState {
    /**
     * The list of recent results.
     * @defaultValue `[]`
     */
    results: Result[];
}
export interface RecentResultsListOptions {
    /**
     * The maximum number of results to retain in the list.
     * @defaultValue `10`
     */
    maxLength: number;
}
/**
 * The `RecentResultsList` controller manages the user's recent results.
 */
export interface RecentResultsList extends Controller {
    /**
     * The state of the RecentResultsList controller.
     * */
    state: RecentResultsState;
    /**
     * Clears the recent results list.
     */
    clear(): void;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `RecentResultsList` controller.
 * */
export interface RecentResultsState {
    /**
     * The list of recent results.
     */
    results: Result[];
    /**
     * The maximum number of results to retain in the list.
     */
    maxLength: number;
}
export declare function validateRecentResultsProps(engine: SearchEngine, props?: RecentResultsListProps): void;
/**
 * Creates a `RecentResultsList` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configuration `RecentResultsList` properties.
 * @returns A `RecentResultsList` controller instance.
 * */
export declare function buildRecentResultsList(engine: SearchEngine, props?: RecentResultsListProps): RecentResultsList;
