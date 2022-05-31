import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
import { Result } from '../../api/search/search/result';
import { SearchResponseSuccess } from '../../api/search/search/search-response';
export interface SearchState {
    /** The search response. For a full description, refer to {@link https://docs.coveo.com/en/13/cloud-v2-api-reference/search-api#operation/searchUsingPost}*/
    response: SearchResponseSuccess;
    /**
     * The time it took to execute the request against the Coveo platform.
     */
    duration: number;
    /**
     * The query (searchbox content) that was executed against the Coveo platform.
     */
    queryExecuted: string;
    /**
     * The error returned by the Coveo platform while executing the search request, if any. `null` otherwise.
     */
    error: SearchAPIErrorWithStatusCode | null;
    /**
     * Specifies if the query was automatically corrected by Headless.
     * This happens when there is no result returned by the API for a particular mispelling.
     */
    automaticallyCorrected: boolean;
    /**
     * `true` if the search request is currently being executed against the Coveo platform, `false` otherwise.
     */
    isLoading: boolean;
    /**
     * The list of results.
     */
    results: Result[];
    /**
     * The unique ID of the response, taken from the response's `searchUid`. This value will not change when loading more results or fetching new facet values.
     */
    searchResponseId: string;
    /**
     * The unique ID of the latest request, generated by Headless each time a search is executed. This value is not to be confused with `searchResponseId` or `searchUid`, which are generated by the Coveo platform.
     */
    requestId: string;
}
export declare function emptyQuestionAnswer(): {
    answerSnippet: string;
    documentId: {
        contentIdKey: string;
        contentIdValue: string;
    };
    question: string;
    relatedQuestions: never[];
    score: number;
};
export declare function getSearchInitialState(): SearchState;
