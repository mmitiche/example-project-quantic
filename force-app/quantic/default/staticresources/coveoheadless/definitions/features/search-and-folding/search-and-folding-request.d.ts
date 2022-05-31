import { SearchAppState } from '../../state/search-app-state';
import { ConfigurationSection } from '../../state/state-sections';
import { SearchRequest } from '../../api/search/search/search-request';
declare type StateNeededByExecuteSearchAndFolding = ConfigurationSection & Partial<SearchAppState>;
export declare const buildSearchAndFoldingLoadCollectionRequest: (state: StateNeededByExecuteSearchAndFolding) => Promise<SearchRequest>;
export {};
