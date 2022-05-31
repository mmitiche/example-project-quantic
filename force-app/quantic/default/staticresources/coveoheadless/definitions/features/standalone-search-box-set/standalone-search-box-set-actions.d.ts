import { PlanRequest } from '../../api/search/plan/plan-request';
import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection, ContextSection, PipelineSection, QuerySection, SearchHubSection } from '../../state/state-sections';
import { OmniboxSuggestionMetadata } from '../query-suggest/query-suggest-analytics-actions';
export interface RegisterStandaloneSearchBoxActionCreatorPayload {
    /**
     * The standalone search box id.
     */
    id: string;
    /**
     * The default URL to which to redirect the user.
     */
    redirectionUrl: string;
}
export declare const registerStandaloneSearchBox: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterStandaloneSearchBoxActionCreatorPayload], RegisterStandaloneSearchBoxActionCreatorPayload, "standaloneSearchBox/register", never, never>;
export interface UpdateAnalyticsToSearchFromLinkActionCreatorPayload {
    /**
     * The standalone search box id.
     */
    id: string;
}
export declare const updateAnalyticsToSearchFromLink: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateAnalyticsToSearchFromLinkActionCreatorPayload], UpdateAnalyticsToSearchFromLinkActionCreatorPayload, "standaloneSearchBox/updateAnalyticsToSearchFromLink", never, never>;
export interface UpdateAnalyticsToOmniboxFromLinkActionCreatorPayload {
    /**
     * The standalone search box id.
     */
    id: string;
    /**
     * The metadata of the suggestion selected from the standalone search box.
     */
    metadata: OmniboxSuggestionMetadata;
}
export declare const updateAnalyticsToOmniboxFromLink: import("@reduxjs/toolkit").ActionCreatorWithPayload<UpdateAnalyticsToOmniboxFromLinkActionCreatorPayload, string>;
export declare type StateNeededForRedirect = ConfigurationSection & QuerySection & Partial<ContextSection & SearchHubSection & PipelineSection>;
export interface FetchRedirectUrlActionCreatorPayload {
    /**
     * The standalone search box id.
     */
    id: string;
}
export declare const fetchRedirectUrl: import("@reduxjs/toolkit").AsyncThunk<string, FetchRedirectUrlActionCreatorPayload, AsyncThunkSearchOptions<StateNeededForRedirect>>;
export declare const buildPlanRequest: (state: StateNeededForRedirect) => Promise<PlanRequest>;
