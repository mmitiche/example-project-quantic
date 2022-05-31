import { PlanResponseSuccess, Plan } from './plan/plan-response';
import { QuerySuggestSuccessResponse, QuerySuggest } from './query-suggest/query-suggest-response';
import { SearchRequest } from './search/search-request';
import { Search, SearchResponseSuccess } from './search/search-response';
import { SearchAPIErrorWithStatusCode } from './search-api-error-response';
import { PlanRequest } from './plan/plan-request';
import { QuerySuggestRequest } from './query-suggest/query-suggest-request';
import { FacetSearchRequest } from './facet-search/facet-search-request';
import { SearchAppState } from '../../state/search-app-state';
import { RecommendationRequest } from './recommendation/recommendation-request';
import { ProductRecommendationsRequest } from './product-recommendations/product-recommendations-request';
import { PostprocessFacetSearchResponseMiddleware, PostprocessQuerySuggestResponseMiddleware, PostprocessSearchResponseMiddleware } from './search-api-client-middleware';
import { HtmlRequest } from './html/html-request';
import { BaseParam } from '../platform-service-params';
import { FieldDescription, FieldDescriptionsResponseSuccess } from './fields/fields-response';
import { AsyncThunkOptions } from '../../app/async-thunk-options';
import { ClientThunkExtraArguments } from '../../app/thunk-extra-arguments';
import { FacetSearchResponse } from './facet-search/facet-search-response';
import { HtmlAPIClientOptions } from './html/html-api-client';
export interface FacetSearchAPIClient {
    facetSearch(req: FacetSearchRequest): Promise<FacetSearchResponse>;
}
export declare type AllSearchAPIResponse = Plan | Search | QuerySuggest | FieldDescription;
export interface AsyncThunkSearchOptions<T extends Partial<SearchAppState>> extends AsyncThunkOptions<T, ClientThunkExtraArguments<SearchAPIClient> & {
    searchAPIClient?: SearchAPIClient;
}> {
    rejectValue: SearchAPIErrorWithStatusCode;
}
export interface SearchAPIClientOptions extends HtmlAPIClientOptions {
    postprocessSearchResponseMiddleware: PostprocessSearchResponseMiddleware;
    postprocessQuerySuggestResponseMiddleware: PostprocessQuerySuggestResponseMiddleware;
    postprocessFacetSearchResponseMiddleware: PostprocessFacetSearchResponseMiddleware;
}
export declare type SearchAPIClientResponse<T> = {
    success: T;
} | {
    error: SearchAPIErrorWithStatusCode;
};
export declare class SearchAPIClient implements FacetSearchAPIClient {
    private options;
    constructor(options: SearchAPIClientOptions);
    plan(req: PlanRequest): Promise<SearchAPIClientResponse<PlanResponseSuccess>>;
    querySuggest(req: QuerySuggestRequest): Promise<SearchAPIClientResponse<QuerySuggestSuccessResponse>>;
    private searchAbortController;
    search(req: SearchRequest): Promise<SearchAPIClientResponse<SearchResponseSuccess>>;
    facetSearch(req: FacetSearchRequest): Promise<FacetSearchResponse>;
    recommendations(req: RecommendationRequest): Promise<{
        success: SearchResponseSuccess;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
    html(req: HtmlRequest): Promise<{
        success: string;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
    productRecommendations(req: ProductRecommendationsRequest): Promise<{
        success: SearchResponseSuccess;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
    fieldDescriptions(req: BaseParam): Promise<{
        success: FieldDescriptionsResponseSuccess;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
    private getAbortControllerInstanceIfAvailable;
}
export declare const isSuccessResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    success: T;
};
export declare const isErrorResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    error: SearchAPIErrorWithStatusCode;
};
