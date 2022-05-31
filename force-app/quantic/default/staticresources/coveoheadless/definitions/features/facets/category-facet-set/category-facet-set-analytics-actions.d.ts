import { AnalyticsType } from '../../analytics/analytics-utils';
export interface LogCategoryFacetBreadcrumbActionCreatorPayload {
    /**
     * The category facet id.
     */
    categoryFacetId: string;
    /**
     * The category facet selected path.
     */
    categoryFacetPath: string[];
}
export declare const logCategoryFacetBreadcrumb: (payload: LogCategoryFacetBreadcrumbActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
