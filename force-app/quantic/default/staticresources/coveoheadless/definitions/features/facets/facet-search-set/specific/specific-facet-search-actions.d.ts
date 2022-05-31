import { SpecificFacetSearchResult } from '../../../../api/search/facet-search/specific-facet-search/specific-facet-search-response';
import { FacetSearchOptions } from '../facet-search-request-options';
declare type selectFacetSearchResultPayload = {
    facetId: string;
    value: SpecificFacetSearchResult;
};
export declare const registerFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: FacetSearchOptions], FacetSearchOptions, "facetSearch/register", never, never>;
export declare const updateFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: FacetSearchOptions], FacetSearchOptions, "facetSearch/update", never, never>;
export declare const selectFacetSearchResult: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: selectFacetSearchResultPayload], selectFacetSearchResultPayload, "facetSearch/toggleSelectValue", never, never>;
export {};
