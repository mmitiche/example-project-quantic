import { SearchPageEvents } from 'coveo.analytics/dist/definitions/searchPage/searchPageEvents';
import { Result } from '../../api/search/search/result';
import { AnalyticsType } from './analytics-utils';
import { OmniboxSuggestionMetadata } from '../query-suggest/query-suggest-analytics-actions';
export interface SearchEventPayload {
    /** The identifier of the search action (e.g., `interfaceLoad`). */
    evt: SearchPageEvents | string;
    /** The event metadata. */
    meta?: Record<string, unknown>;
}
export interface ClickEventPayload {
    evt: SearchPageEvents | string;
    result: Result;
}
export interface CustomEventPayload {
    /**
     * The event cause identifier of the custom action
     */
    evt: SearchPageEvents | string;
    /**
     * The event type identifier of the custom action
     */
    type: string;
    /** The event metadata. */
    meta?: Record<string, unknown>;
}
export interface LogSearchEventActionCreatorPayload {
    /**
     * The identifier of the search action (e.g., `interfaceLoad`).
     * */
    evt: string;
    /**
     * The event metadata.
     * */
    meta?: Record<string, unknown>;
}
export declare const logSearchEvent: (p: LogSearchEventActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogClickEventActionCreatorPayload {
    /**
     * The identifier of the click action (e.g., `documentOpen`).
     * */
    evt: string;
    /**
     * The result associated with the click event.
     */
    result: Result;
}
export declare const logClickEvent: (p: LogClickEventActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogCustomEventActionCreatorPayload {
    /**
     * The event cause identifier of the custom action
     */
    evt: string;
    /**
     * The event type identifier of the custom action
     */
    type: string;
    /**
     * The event metadata.
     * */
    meta?: Record<string, unknown>;
}
export declare const logCustomEvent: (p: LogCustomEventActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Custom;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logInterfaceLoad: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logInterfaceChange: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logSearchFromLink: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logOmniboxFromLink: (metadata: OmniboxSuggestionMetadata) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("./analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
