import { FacetSearchOptions } from '../facet-search-request-options';
import { CategoryFacetSearchResult } from '../../../../api/search/facet-search/category-facet-search/category-facet-search-response';
export declare const selectCategoryFacetSearchResult: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    value: CategoryFacetSearchResult;
}], {
    facetId: string;
    value: CategoryFacetSearchResult;
}, "categoryFacet/selectSearchResult", never, never>;
export declare const registerCategoryFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: FacetSearchOptions], FacetSearchOptions, "categoryFacetSearch/register", never, never>;
