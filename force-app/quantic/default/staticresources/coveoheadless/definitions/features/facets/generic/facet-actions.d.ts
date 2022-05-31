/**
 * @deprecated - Please use `deselectAllBreadcrumbs` instead.
 */
export declare const deselectAllFacets: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"facet/deselectAllFacets">;
export interface UpdateFacetAutoSelectionActionCreatorPayload {
    /**
     * Whether to allow or prevent automatic selection in all facets.
     */
    allow: boolean;
}
export declare const updateFacetAutoSelection: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateFacetAutoSelectionActionCreatorPayload], UpdateFacetAutoSelectionActionCreatorPayload, "facet/updateFacetAutoSelection", never, never>;
