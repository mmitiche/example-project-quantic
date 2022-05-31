import { SearchAPIClientResponse } from '../../api/search/search-api-client';
import { SearchRequest } from '../../api/search/search/search-request';
import { SearchResponseSuccess } from '../../api/search/search/search-response';
interface SearchMappings {
    dateFacetValueMap: Record<string, Record<string, string>>;
}
export interface MappedSearchRequest {
    request: SearchRequest;
    mappings: SearchMappings;
}
export declare function mapSearchRequest(searchRequest: SearchRequest): MappedSearchRequest;
export declare function mapSearchResponse(response: SearchAPIClientResponse<SearchResponseSuccess>, mappings: SearchMappings): {
    error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode;
} | {
    success: SearchResponseSuccess;
};
export {};
