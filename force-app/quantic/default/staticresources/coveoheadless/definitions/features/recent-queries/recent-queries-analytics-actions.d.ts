import { AnalyticsType } from '../analytics/analytics-utils';
export declare const logClearRecentQueries: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logRecentQueryClick: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
