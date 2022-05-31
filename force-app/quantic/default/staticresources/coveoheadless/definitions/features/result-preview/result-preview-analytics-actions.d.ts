import { Result } from '../../api/search/search/result';
import { AnalyticsType } from '../analytics/analytics-utils';
export declare const logDocumentQuickview: (result: Result) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const buildDocumentQuickviewThunk: (result: Result) => import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Click;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
