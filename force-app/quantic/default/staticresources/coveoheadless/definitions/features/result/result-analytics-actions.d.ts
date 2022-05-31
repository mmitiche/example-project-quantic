import { AnalyticsType } from '../analytics/analytics-utils';
import { Result } from '../../api/search/search/result';
export declare const logDocumentOpenThunk: (result: Result) => import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Click;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logDocumentOpen: (result: Result) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
