import { Result } from '../../api/search/search/result';
import { AnalyticsType } from '../analytics/analytics-utils';
export declare const logRecentResultClickThunk: (result: Result) => import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logRecentResultClick: (result: Result) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logClearRecentResults: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
