export interface UpdateFacetOptionsActionCreatorPayload {
    /**
     * Whether facets should be returned in the same order they were requested.
     */
    freezeFacetOrder?: boolean;
}
export declare type EnableFacetActionCreatorPayload = string;
export declare type DisableFacetActionCreatorPayload = string;
export declare const updateFacetOptions: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateFacetOptionsActionCreatorPayload], UpdateFacetOptionsActionCreatorPayload, "facetOptions/update", never, never>;
export declare const enableFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facetOptions/facet/enable", never, never>;
export declare const disableFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facetOptions/facet/disable", never, never>;
