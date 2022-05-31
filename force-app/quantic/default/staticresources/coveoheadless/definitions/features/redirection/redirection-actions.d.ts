import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection, ContextSection, PipelineSection, QuerySection, SearchHubSection } from '../../state/state-sections';
export declare type RedirectionState = ConfigurationSection & QuerySection & Partial<ContextSection & SearchHubSection & PipelineSection>;
export interface CheckForRedirectionActionCreatorPayload {
    /**
     * The default URL to redirect the user to.
     */
    defaultRedirectionUrl: string;
}
export declare const checkForRedirection: import("@reduxjs/toolkit").AsyncThunk<string, CheckForRedirectionActionCreatorPayload, AsyncThunkSearchOptions<RedirectionState>>;
