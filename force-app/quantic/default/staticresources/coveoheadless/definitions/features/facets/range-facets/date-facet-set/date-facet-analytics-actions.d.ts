import { AnalyticsType } from '../../../analytics/analytics-utils';
import { DateFacetValue } from './interfaces/response';
export interface LogDateFacetBreadcrumbActionCreatorPayload {
    /**
     * The facet id of the date facet corresponding to the breadcrumb.
     */
    facetId: string;
    /**
     * The date facet value deselected using the breadcrumb.
     */
    selection: DateFacetValue;
}
export declare const logDateFacetBreadcrumb: (payload: LogDateFacetBreadcrumbActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
