import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection, ContextSection, PipelineSection, QuerySetSection, QuerySuggestionSection, SearchHubSection } from '../../state/state-sections';
import { QuerySuggestRequest } from '../../api/search/query-suggest/query-suggest-request';
import { QuerySuggestSuccessResponse } from '../../api/search/query-suggest/query-suggest-response';
export declare type StateNeededByQuerySuggest = ConfigurationSection & QuerySuggestionSection & Partial<QuerySetSection & ContextSection & PipelineSection & SearchHubSection>;
export interface QuerySuggestionID {
    id: string;
}
export interface RegisterQuerySuggestActionCreatorPayload {
    /**
     * A unique identifier for the new query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
     */
    id: string;
    /**
     * The partial basic query expression for which to request query suggestions (e.g., `cov`).
     */
    q?: string;
    /**
     * The number of query suggestions to request from Coveo ML (e.g., `3`).
     *
     * @defaultValue `5`.
     */
    count?: number;
}
export declare const registerQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterQuerySuggestActionCreatorPayload], RegisterQuerySuggestActionCreatorPayload, "querySuggest/register", never, never>;
export declare const unregisterQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    id: string;
}], {
    id: string;
}, "querySuggest/unregister", never, never>;
export interface SelectQuerySuggestionActionCreatorPayload {
    /**
     * The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
     */
    id: string;
    /**
     * The selected query suggestion (e.g., `coveo`).
     */
    expression: string;
}
export declare const selectQuerySuggestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SelectQuerySuggestionActionCreatorPayload], SelectQuerySuggestionActionCreatorPayload, "querySuggest/selectSuggestion", never, never>;
export interface ClearQuerySuggestActionCreatorPayload {
    /**
     * The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
     */
    id: string;
}
export declare const clearQuerySuggest: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: ClearQuerySuggestActionCreatorPayload], ClearQuerySuggestActionCreatorPayload, "querySuggest/clear", never, never>;
export interface FetchQuerySuggestionsActionCreatorPayload {
    /**
     * The unique identifier of the target query suggest entity (e.g., `b953ab2e-022b-4de4-903f-68b2c0682942`).
     */
    id: string;
}
export interface FetchQuerySuggestionsThunkReturn extends FetchQuerySuggestionsActionCreatorPayload, QuerySuggestSuccessResponse {
    /**
     * The query for which query suggestions were retrieved.
     */
    q: string | undefined;
}
export declare const fetchQuerySuggestions: import("@reduxjs/toolkit").AsyncThunk<FetchQuerySuggestionsThunkReturn, FetchQuerySuggestionsActionCreatorPayload, AsyncThunkSearchOptions<StateNeededByQuerySuggest>>;
export declare const buildQuerySuggestRequest: (id: string, s: StateNeededByQuerySuggest) => Promise<QuerySuggestRequest>;
