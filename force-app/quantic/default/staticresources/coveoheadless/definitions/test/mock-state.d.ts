import { SearchAppState } from '../state/search-app-state';
/**
 * For internal use only.
 *
 * Returns a `SearchAppState` for testing purposes.
 * @param config - A Partial `SearchAppState` from which to build the target `SearchAppState`.
 * @returns The new `SearchAppState`.
 */
export declare function createMockState(config?: Partial<SearchAppState>): SearchAppState;
