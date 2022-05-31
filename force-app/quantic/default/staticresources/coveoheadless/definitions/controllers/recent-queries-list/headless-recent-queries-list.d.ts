import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
export interface RecentQueriesListProps {
    /**
     * The initial state that should be applied to the `RecentQueriesList` controller.
     */
    initialState?: RecentQueriesListInitialState;
    /**
     * The configuration options that should be applied to the `RecentQueriesList` controller.
     */
    options?: RecentQueriesListOptions;
}
export interface RecentQueriesListInitialState {
    /**
     * The list of recent queries.
     * @defaultValue `[]`
     */
    queries: string[];
}
export interface RecentQueriesListOptions {
    /**
     * The maximum number of queries to retain in the list.
     * @defaultValue `10`
     */
    maxLength: number;
}
/**
 * The `RecentQueriesList` controller manages the user's recent queries.
 */
export interface RecentQueriesList extends Controller {
    /**
     * The state of the RecentQueriesList controller.
     * */
    state: RecentQueriesState;
    /**
     * Clears the recent queries list.
     */
    clear(): void;
    /**
     * Executes the given recent query.
     * @param index - The index of the recent query to execute.
     */
    executeRecentQuery(index: number): void;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `RecentQueriesList` controller.
 * */
export interface RecentQueriesState {
    /**
     * The list of recent queries.
     */
    queries: string[];
    /**
     * The maximum number of queries to retain in the list.
     */
    maxLength: number;
    /**
     * Whether analytics & tracking are enabled.
     * In the case where it is disabled, it is recommended not to save recent queries.
     */
    analyticsEnabled: boolean;
}
export declare function validateRecentQueriesProps(engine: SearchEngine, props?: RecentQueriesListProps): void;
/**
 * Creates a `RecentQueriesList` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configuration `RecentQueriesList` properties.
 * @returns A `RecentQueriesList` controller instance.
 * */
export declare function buildRecentQueriesList(engine: SearchEngine, props?: RecentQueriesListProps): RecentQueriesList;
