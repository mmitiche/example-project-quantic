import { NextStageOptions } from './case-assist-analytics-actions-loader';
export declare const logCaseStart: import("@reduxjs/toolkit").AsyncThunk<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logCaseNextStage: (options?: NextStageOptions | undefined) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logCreateCase: import("@reduxjs/toolkit").AsyncThunk<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logSolveCase: import("@reduxjs/toolkit").AsyncThunk<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logAbandonCase: import("@reduxjs/toolkit").AsyncThunk<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logUpdateCaseField: (fieldName: string) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logAutoSelectCaseField: (classificationId: string) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logClassificationClick: (classificationId: string) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logDocumentSuggestionClick: (suggestionId: string) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logQuickviewDocumentSuggestionClick: (suggestionId: string) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const buildQuickviewDocumentSuggestionClickThunk: (suggestionId: string) => import("@reduxjs/toolkit").AsyncThunk<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logDocumentSuggestionOpen: (suggestionId: string) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const buildDocumentSuggestionOpenThunk: (suggestionId: string) => import("@reduxjs/toolkit").AsyncThunk<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
export declare const logDocumentSuggestionRating: (suggestionId: string, rating: number) => import("@reduxjs/toolkit").AsyncThunkAction<void, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByCaseAssistAnalytics>>;
