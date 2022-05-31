import { Result } from '../../api/search/search/result';
import { PartialDocumentInformation, DocumentIdentifier } from 'coveo.analytics/dist/definitions/searchPage/searchPageEvents';
import { SearchAppState } from '../../state/search-app-state';
import { RecordValue, StringValue } from '@coveo/bueno';
import { StateNeededByAnalyticsProvider, StateNeededByCaseAssistAnalytics } from '../../api/analytics/analytics';
import { CoveoSearchPageClient, SearchPageClientProvider, CaseAssistClient } from 'coveo.analytics';
import { SearchEventResponse } from 'coveo.analytics/dist/definitions/events';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { ThunkExtraArguments } from '../../app/thunk-extra-arguments';
import { ConfigurationSection } from '../../state/state-sections';
import { RecommendationAppState } from '../../state/recommendation-app-state';
import { CaseAssistAppState } from '../../state/case-assist-app-state';
export declare enum AnalyticsType {
    Search = 0,
    Custom = 1,
    Click = 2
}
export declare type SearchAction = AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void | {}, AsyncThunkAnalyticsOptions<StateNeededByAnalyticsProvider>>;
export declare type CustomAction = AsyncThunkAction<{
    analyticsType: AnalyticsType.Custom;
}, {}, {}>;
export declare type ClickAction = AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, {}, {}>;
export interface AsyncThunkAnalyticsOptions<T extends Partial<StateNeededByAnalyticsProvider>> {
    state: T;
    extra: ThunkExtraArguments;
}
export declare const makeAnalyticsAction: <T extends AnalyticsType>(prefix: string, analyticsType: T, log: (client: CoveoSearchPageClient, state: ConfigurationSection & Partial<SearchAppState>) => Promise<void | SearchEventResponse> | void, provider?: (state: Partial<SearchAppState>) => SearchPageClientProvider) => import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: T;
}, void, AsyncThunkAnalyticsOptions<StateNeededByAnalyticsProvider>>;
export declare const makeNoopAnalyticsAction: <T extends AnalyticsType>(analyticsType: T) => import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: T;
}, void, AsyncThunkAnalyticsOptions<StateNeededByAnalyticsProvider>>;
export declare const noopSearchAnalyticsAction: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, AsyncThunkAnalyticsOptions<StateNeededByAnalyticsProvider>>;
export declare const makeCaseAssistAnalyticsAction: (prefix: string, log: (client: CaseAssistClient, state: ConfigurationSection & Partial<CaseAssistAppState>) => Promise<void | SearchEventResponse> | void) => import("@reduxjs/toolkit").AsyncThunk<void, void, AsyncThunkAnalyticsOptions<StateNeededByCaseAssistAnalytics>>;
export declare const partialDocumentInformation: (result: Result, state: Partial<SearchAppState>) => PartialDocumentInformation;
export declare const partialRecommendationInformation: (result: Result, state: Partial<RecommendationAppState>) => PartialDocumentInformation;
export declare const documentIdentifier: (result: Result) => DocumentIdentifier;
export declare const resultPartialDefinition: {
    uniqueId: StringValue<string>;
    raw: RecordValue;
    title: StringValue<string>;
    uri: StringValue<string>;
    clickUri: StringValue<string>;
    rankingModifier: StringValue<string>;
};
export declare const validateResultPayload: (result: Result) => Partial<{
    uniqueId: string;
    raw: unknown;
    title: string;
    uri: string;
    clickUri: string;
    rankingModifier: string;
}>;
