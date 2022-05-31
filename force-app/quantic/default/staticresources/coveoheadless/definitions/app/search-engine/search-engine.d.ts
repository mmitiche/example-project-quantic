import { CoreEngine, ExternalEngineOptions } from '../engine';
import { StateFromReducersMapObject } from 'redux';
import { SearchEngineConfiguration, SearchConfigurationOptions, getSampleSearchEngineConfiguration } from './search-engine-configuration';
import { SearchAppState } from '../../state/search-app-state';
import { SearchThunkExtraArguments } from '../search-thunk-extra-arguments';
import { SearchAction } from '../../features/analytics/analytics-utils';
import { StandaloneSearchBoxAnalytics } from '../../features/standalone-search-box-set/standalone-search-box-set-state';
export type { SearchEngineConfiguration, SearchConfigurationOptions };
export { getSampleSearchEngineConfiguration };
declare const searchEngineReducers: {
    debug: import("redux").Reducer<boolean, import("redux").AnyAction>;
    pipeline: import("redux").Reducer<string, import("redux").AnyAction>;
    searchHub: import("redux").Reducer<string, import("redux").AnyAction>;
    search: import("redux").Reducer<import("../../features/search/search-state").SearchState, import("redux").AnyAction>;
};
declare type SearchEngineReducers = typeof searchEngineReducers;
declare type SearchEngineState = StateFromReducersMapObject<SearchEngineReducers> & Partial<SearchAppState>;
/**
 * The engine for powering search experiences.
 */
export interface SearchEngine<State extends object = {}> extends CoreEngine<State & SearchEngineState, SearchThunkExtraArguments> {
    /**
     * Executes the first search.
     *
     * @param analyticsEvent - The analytics event to log in association with the first search. If unspecified, `logInterfaceLoad` will be used.
     */
    executeFirstSearch(analyticsEvent?: SearchAction): void;
    /**
     * Executes the first search, and logs the analytics event that triggered a redirection from a standalone search box.
     *
     * @param analytics - The standalone search box analytics data.
     */
    executeFirstSearchAfterStandaloneSearchBoxRedirect(analytics: StandaloneSearchBoxAnalytics): void;
}
/**
 * The search engine options.
 */
export interface SearchEngineOptions extends ExternalEngineOptions<SearchEngineState> {
    /**
     * The search engine configuration options.
     */
    configuration: SearchEngineConfiguration;
}
/**
 * Creates a search engine instance.
 *
 * @param options - The search engine options.
 * @returns A search engine instance.
 */
export declare function buildSearchEngine(options: SearchEngineOptions): SearchEngine;
