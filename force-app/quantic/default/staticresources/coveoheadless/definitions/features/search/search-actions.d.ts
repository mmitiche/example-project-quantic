import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { SearchResponseSuccess } from '../../api/search/search/search-response';
import { UpdateQueryActionCreatorPayload } from '../query/query-actions';
import { AdvancedSearchQueriesSection, CategoryFacetSection, ConfigurationSection, ContextSection, DateFacetSection, DebugSection, DidYouMeanSection, FacetOptionsSection, FacetOrderSection, FacetSection, FieldsSection, FoldingSection, NumericFacetSection, PaginationSection, PipelineSection, QuerySection, QuerySetSection, SearchHubSection, SearchSection, SortSection } from '../../state/state-sections';
import { SearchAction } from '../analytics/analytics-utils';
import { AsyncThunkOptions } from '../../app/async-thunk-options';
export declare type StateNeededByExecuteSearch = ConfigurationSection & Partial<QuerySection & AdvancedSearchQueriesSection & PaginationSection & SortSection & FacetSection & NumericFacetSection & CategoryFacetSection & DateFacetSection & ContextSection & DidYouMeanSection & FieldsSection & PipelineSection & SearchHubSection & QuerySetSection & FacetOptionsSection & FacetOrderSection & DebugSection & SearchSection & FoldingSection>;
export interface ExecuteSearchThunkReturn {
    /** The successful search response. */
    response: SearchResponseSuccess;
    /** The number of milliseconds it took to receive the response. */
    duration: number;
    /** The query that was executed. */
    queryExecuted: string;
    /** Whether the query was automatically corrected. */
    automaticallyCorrected: boolean;
    /** The original query that was performed when an automatic correction is executed.*/
    originalQuery: string;
    /** The analytics action to log after the query. */
    analyticsAction: SearchAction;
}
export declare const prepareForSearchWithQuery: import("@reduxjs/toolkit").AsyncThunk<void, UpdateQueryActionCreatorPayload, AsyncThunkOptions<StateNeededByExecuteSearch, import("../../app/thunk-extra-arguments").ThunkExtraArguments>>;
export declare const executeSearch: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturn, SearchAction, AsyncThunkSearchOptions<StateNeededByExecuteSearch>>;
export declare const fetchMoreResults: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturn, void, AsyncThunkSearchOptions<StateNeededByExecuteSearch>>;
export declare const fetchFacetValues: import("@reduxjs/toolkit").AsyncThunk<ExecuteSearchThunkReturn, SearchAction, AsyncThunkSearchOptions<StateNeededByExecuteSearch>>;
