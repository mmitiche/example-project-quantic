import { SearchEngine } from '../../app/search-engine/search-engine';
import { StandaloneSearchBoxAnalytics } from '../../features/standalone-search-box-set/standalone-search-box-set-state';
import { SearchBox, SearchBoxState } from '../search-box/headless-search-box';
import { StandaloneSearchBoxOptions } from './headless-standalone-search-box-options';
export type { StandaloneSearchBoxOptions, StandaloneSearchBoxAnalytics };
export interface StandaloneSearchBoxProps {
    options: StandaloneSearchBoxOptions;
}
/**
 * The `StandaloneSearchBox` headless controller offers a high-level interface for designing a common search box UI controller.
 * Meant to be used for a search box that will redirect instead of executing a query.
 */
export interface StandaloneSearchBox extends SearchBox {
    /**
     * Triggers a redirection.
     */
    submit(): void;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `StandaloneSearchBox` controller.
     */
    state: StandaloneSearchBoxState;
}
export interface StandaloneSearchBoxState extends SearchBoxState {
    /**
     * The analytics data to send when performing the first query on the search page the user is redirected to.
     */
    analytics: StandaloneSearchBoxAnalytics;
    /**
     * The Url to redirect to.
     */
    redirectTo: string;
}
/**
 * Creates a `StandaloneSearchBox` instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `StandaloneSearchBox` properties.
 * @returns A `StandaloneSearchBox` instance.
 */
export declare function buildStandaloneSearchBox(engine: SearchEngine, props: StandaloneSearchBoxProps): StandaloneSearchBox;
