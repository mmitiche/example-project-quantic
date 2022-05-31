import { Result } from '../../api/search/search/result';
export interface RecentResultsState {
    results: Result[];
    maxLength: number;
}
export declare function getRecentResultsInitialState(): RecentResultsState;
