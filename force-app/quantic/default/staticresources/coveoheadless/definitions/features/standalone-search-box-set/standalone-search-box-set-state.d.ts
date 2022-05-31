import { OmniboxSuggestionMetadata } from '../query-suggest/query-suggest-analytics-actions';
export declare type StandaloneSearchBoxSetState = Record<string, StandaloneSearchBoxEntry | undefined>;
export declare type StandaloneSearchBoxEntry = {
    defaultRedirectionUrl: string;
    analytics: StandaloneSearchBoxAnalytics;
    redirectTo: string;
    isLoading: boolean;
};
export declare type StandaloneSearchBoxAnalytics = InitialData | SearchFromLinkData | OmniboxFromLinkData;
interface InitialData {
    cause: '';
    metadata: null;
}
interface SearchFromLinkData {
    cause: 'searchFromLink';
    metadata: null;
}
interface OmniboxFromLinkData {
    cause: 'omniboxFromLink';
    metadata: OmniboxSuggestionMetadata;
}
export declare function getStandaloneSearchBoxSetInitialState(): StandaloneSearchBoxSetState;
export {};
