import { AnalyticsType } from '../analytics/analytics-utils';
import { StaticFilterValue } from './static-filter-set-state';
export interface RegisterStaticFilterActionCreatorPayload {
    /**
     * A unique identifier for the static filter.
     */
    id: string;
    /**
     * The values of the static filter.
     */
    values: StaticFilterValue[];
}
export declare const registerStaticFilter: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterStaticFilterActionCreatorPayload], RegisterStaticFilterActionCreatorPayload, "staticFilter/register", never, never>;
export interface ToggleSelectStaticFilterValueActionCreatorPayload {
    /**
     * The unique identifier for the static filter.
     */
    id: string;
    /**
     * The target static filter value.
     */
    value: StaticFilterValue;
}
export declare const toggleSelectStaticFilterValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: ToggleSelectStaticFilterValueActionCreatorPayload], ToggleSelectStaticFilterValueActionCreatorPayload, "staticFilter/toggleSelect", never, never>;
export declare const deselectAllStaticFilterValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "staticFilter/deselectAllFilterValues", never, never>;
export interface LogStaticFilterToggleValueActionCreatorPayload {
    /**
     * The static filter id.
     */
    staticFilterId: string;
    /**
     * The static filter value.
     */
    staticFilterValue: StaticFilterValueMetadata;
}
export interface StaticFilterValueMetadata {
    /**
     * The caption displayed to the user.
     */
    caption: string;
    /**
     * The query expression.
     */
    expression: string;
}
export declare const logStaticFilterSelect: (metadata: LogStaticFilterToggleValueActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logStaticFilterDeselect: (metadata: LogStaticFilterToggleValueActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogStaticFilterClearAllActionCreatorPayload {
    /**
     * The static filter id.
     */
    staticFilterId: string;
}
export declare const logStaticFilterClearAll: (metadata: LogStaticFilterClearAllActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
