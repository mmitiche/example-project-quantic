import { FacetSearchResponse } from '../../../../api/search/facet-search/facet-search-response';
import { StateNeededForFacetSearch } from './generic-facet-search-state';
import { AsyncThunkOptions } from '../../../../app/async-thunk-options';
import { ClientThunkExtraArguments } from '../../../../app/thunk-extra-arguments';
import { FacetSearchAPIClient } from '../../../../api/search/search-api-client';
export declare const executeFacetSearch: import("@reduxjs/toolkit").AsyncThunk<{
    facetId: string;
    response: FacetSearchResponse;
}, string, AsyncThunkOptions<StateNeededForFacetSearch, ClientThunkExtraArguments<FacetSearchAPIClient>>>;
export declare const clearFacetSearch: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
}], {
    facetId: string;
}, "facetSearch/clearResults", never, never>;
