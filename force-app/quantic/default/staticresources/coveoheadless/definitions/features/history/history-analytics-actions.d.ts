import { AnalyticsType } from '../analytics/analytics-utils';
export declare const logNavigateForward: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logNavigateBackward: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logNoResultsBack: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
