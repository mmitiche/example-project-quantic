export declare type FacetOptionsSlice = {
    enabled: boolean;
};
export declare type FacetOptionsState = {
    freezeFacetOrder: boolean;
    facets: Record<string, FacetOptionsSlice>;
};
export declare function getFacetOptionsSliceInitialState(): FacetOptionsSlice;
export declare function getFacetOptionsInitialState(): FacetOptionsState;
