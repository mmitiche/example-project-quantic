import { CoveoSearchPageClient, SearchPageClientProvider, history, AnalyticsClientSendEventHook, CaseAssistClient, CaseAssistClientProvider } from 'coveo.analytics';
import { Logger } from 'pino';
import { CaseAssistConfigurationSection, ConfigurationSection, ContextSection, PipelineSection, ProductListingSection, QuerySection, RecommendationSection, SearchHubSection, SearchSection } from '../../state/state-sections';
import { PreprocessRequest } from '../preprocess-request';
import { SectionNeededForFacetMetadata } from '../../features/facets/facet-set/facet-set-analytics-actions-utils';
export declare type StateNeededByAnalyticsProvider = ConfigurationSection & Partial<SearchHubSection & SearchSection & PipelineSection & QuerySection & ContextSection & RecommendationSection & ProductListingSection & SectionNeededForFacetMetadata>;
export declare type StateNeededByCaseAssistAnalytics = ConfigurationSection & Partial<CaseAssistConfigurationSection> & Partial<SearchHubSection>;
export declare class AnalyticsProvider implements SearchPageClientProvider {
    private state;
    constructor(state: StateNeededByAnalyticsProvider);
    getLanguage(): string;
    getSearchEventRequestPayload(): {
        queryText: string;
        responseTime: number;
        results: {
            documentUri: string;
            documentUriHash: string;
        }[] | undefined;
        numberOfResults: number;
    };
    getBaseMetadata(): Record<string, string | string[]>;
    getSearchUID(): string;
    getPipeline(): string;
    getOriginContext(): string;
    getOriginLevel1(): string;
    getOriginLevel2(): string;
    getOriginLevel3(): string;
    getFacetState(): import("coveo.analytics/dist/definitions/events").FacetStateRequest[];
    getIsAnonymous(): boolean;
    private mapResultsToAnalyticsDocument;
    private get queryText();
    private get responseTime();
    private get numberOfResults();
}
export declare class CaseAssistAnalyticsProvider implements CaseAssistClientProvider {
    private state;
    constructor(state: StateNeededByCaseAssistAnalytics);
    getOriginLevel1(): string;
}
interface ConfigureAnalyticsOptions {
    state: StateNeededByAnalyticsProvider;
    logger: Logger;
    analyticsClientMiddleware?: AnalyticsClientSendEventHook;
    preprocessRequest?: PreprocessRequest;
    provider?: SearchPageClientProvider;
}
export declare const configureAnalytics: ({ logger, state, analyticsClientMiddleware, preprocessRequest, provider, }: ConfigureAnalyticsOptions) => CoveoSearchPageClient;
export declare const getVisitorID: () => Promise<string>;
export declare const historyStore: history.HistoryStore;
export declare const getPageID: () => string;
interface ConfigureCaseAssistAnalyticsOptions {
    state: StateNeededByCaseAssistAnalytics;
    logger: Logger;
    analyticsClientMiddleware?: AnalyticsClientSendEventHook;
    preprocessRequest?: PreprocessRequest;
    provider?: CaseAssistClientProvider;
}
export declare const configureCaseAssistAnalytics: ({ logger, state, analyticsClientMiddleware, preprocessRequest, provider, }: ConfigureCaseAssistAnalyticsOptions) => CaseAssistClient;
export {};
