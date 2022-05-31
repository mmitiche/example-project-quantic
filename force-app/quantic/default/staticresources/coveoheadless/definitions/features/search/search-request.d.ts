import { SearchAppState } from '../..';
import { ConfigurationSection } from '../../state/state-sections';
declare type StateNeededBySearchRequest = ConfigurationSection & Partial<SearchAppState>;
export declare const buildSearchRequest: (state: StateNeededBySearchRequest) => Promise<import("./search-mappings").MappedSearchRequest>;
export {};
