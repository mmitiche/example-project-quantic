import { NumericFacetValue } from './interfaces/response';
import { RangeFacetRangeAlgorithm, RangeFacetSortCriterion } from '../generic/interfaces/request';
import { NumericRangeRequest } from './interfaces/request';
export interface RegisterNumericFacetActionCreatorPayload {
    /**
     * A unique identifier for the numeric facet.
     */
    facetId: string;
    /**
     * The field whose values you want to display in the facet.
     */
    field: string;
    /**
     * Whether the index should automatically create range values.
     *
     * Tip: If you set this parameter to true, you should ensure that the ['Use cache for numeric queries' option](https://docs.coveo.com/en/1982/#use-cache-for-numeric-queries) is enabled for this facet's field in your index in order to speed up automatic range evaluation.
     */
    generateAutomaticRanges: boolean;
    /**
     * The values displayed by the facet in the search interface at the moment of the request.
     *
     * If `generateAutomaticRanges` is false, values must be specified.
     * If `generateAutomaticRanges` is true, automatic ranges are going to be appended after the specified values.
     *
     * @defaultValue `[]`
     */
    currentValues?: NumericRangeRequest[];
    /**
     * Whether to exclude folded result parents when estimating the result count for each facet value.
     *
     * @defaultValue `true`
     */
    filterFacetCount?: boolean;
    /**
     * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
     *
     * Note: A high injectionDepth may negatively impact the facet request performance.
     *
     * Minimum: `0`
     *
     * @defaultValue `1000`
     */
    injectionDepth?: number;
    /**
     * The number of values to request for this facet.
     * Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
     *
     * Minimum: `1`
     *
     * @defaultValue `8`
     */
    numberOfValues?: number;
    /**
     * The sort criterion to apply to the returned facet values.
     *
     * @defaultValue `ascending`
     */
    sortCriteria?: RangeFacetSortCriterion;
    /**
     * The range algorithm to apply to automatically generated ranges for the range facet.
     *
     * @defaultValue `even`
     */
    rangeAlgorithm?: RangeFacetRangeAlgorithm;
}
export declare function validateManualNumericRanges(options: Pick<RegisterNumericFacetActionCreatorPayload, 'currentValues'>): void;
export declare const registerNumericFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterNumericFacetActionCreatorPayload], RegisterNumericFacetActionCreatorPayload, "numericFacet/register", import("@reduxjs/toolkit").SerializedError | null, never>;
export interface ToggleSelectNumericFacetValueActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The target numeric facet value.
     */
    selection: NumericFacetValue;
}
export declare const toggleSelectNumericFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: ToggleSelectNumericFacetValueActionCreatorPayload], ToggleSelectNumericFacetValueActionCreatorPayload, "numericFacet/toggleSelectValue", never, never>;
export interface UpdateNumericFacetValuesActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The numeric facet values.
     */
    values: NumericFacetValue[];
}
export declare const updateNumericFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateNumericFacetValuesActionCreatorPayload], UpdateNumericFacetValuesActionCreatorPayload, "numericFacet/updateFacetValues", import("@reduxjs/toolkit").SerializedError | null, never>;
export interface UpdateNumericFacetSortCriterionActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The target criterion.
     */
    criterion: RangeFacetSortCriterion;
}
export declare const updateNumericFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    criterion: RangeFacetSortCriterion;
}], {
    facetId: string;
    criterion: RangeFacetSortCriterion;
}, "rangeFacet/updateSortCriterion", never, never>;
export declare const deselectAllNumericFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
