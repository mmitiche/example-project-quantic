import { RecommendationRequest } from '../../api/search/recommendation/recommendation-request';
import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { Result } from '../../api/search/search/result';
import { ConfigurationSection, RecommendationSection } from '../../state/state-sections';
import { SearchAction } from '../analytics/analytics-utils';
import { RecommendationAppState } from '../../state/recommendation-app-state';
export declare type StateNeededByGetRecommendations = ConfigurationSection & RecommendationSection & Partial<RecommendationAppState>;
export interface GetRecommendationsThunkReturn {
    recommendations: Result[];
    analyticsAction: SearchAction;
    searchUid: string;
    duration: number;
}
export interface SetRecommendationIdActionCreatorPayload {
    /**
     * The recommendation identifier.
     */
    id: string;
}
export declare const setRecommendationId: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetRecommendationIdActionCreatorPayload], SetRecommendationIdActionCreatorPayload, "recommendation/set", never, never>;
export declare const getRecommendations: import("@reduxjs/toolkit").AsyncThunk<GetRecommendationsThunkReturn, void, AsyncThunkSearchOptions<StateNeededByGetRecommendations>>;
export declare const buildRecommendationRequest: (s: StateNeededByGetRecommendations) => Promise<RecommendationRequest>;
