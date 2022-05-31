import { AnalyticsType } from '../analytics/analytics-utils';
export declare const logProductRecommendations: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
