import { FacetSortCriterion } from './interfaces/request';
import { RangeFacetSortCriterion } from '../range-facets/generic/interfaces/request';
import { AnalyticsType } from '../../analytics/analytics-utils';
export declare const logFacetShowMore: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logFacetShowLess: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logFacetSearch: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetUpdateSortActionCreatorPayload {
    /**
     * The facet id.
     */
    facetId: string;
    /**
     * The updated sort criterion.
     */
    criterion: FacetSortCriterion | RangeFacetSortCriterion;
}
export declare const logFacetUpdateSort: (payload: LogFacetUpdateSortActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logFacetClearAll: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetSelectActionCreatorPayload {
    /**
     * The facet id.
     */
    facetId: string;
    /**
     * The facet value that was selected.
     */
    facetValue: string;
}
export declare const logFacetSelect: (payload: LogFacetSelectActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetDeselectActionCreatorPayload {
    /**
     * The facet id.
     */
    facetId: string;
    /**
     * The facet value that was deselected.
     */
    facetValue: string;
}
export declare const logFacetDeselect: (payload: LogFacetDeselectActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetBreadcrumbActionCreatorPayload {
    /**
     * The facet id associated with the breadcrumb.
     */
    facetId: string;
    /**
     * The facet value displayed in the breadcrumb.
     */
    facetValue: string;
}
export declare const logFacetBreadcrumb: (payload: LogFacetBreadcrumbActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
