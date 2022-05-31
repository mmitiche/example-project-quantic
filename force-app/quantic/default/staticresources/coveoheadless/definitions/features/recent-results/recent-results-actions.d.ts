import { Result } from '../../api/search/search/result';
export interface RegisterRecentResultsCreatorPayload {
    /**
     * The recent results viewed by the user prior to instantiating the controller.
     */
    results: Result[];
    /**
     * The maximum number of queries to retain in the list.
     */
    maxLength: number;
}
export declare const registerRecentResults: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterRecentResultsCreatorPayload], RegisterRecentResultsCreatorPayload, "recentResults/registerRecentResults", never, never>;
export declare const pushRecentResult: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: Result], Result, "recentResults/pushRecentResult", never, never>;
export declare const clearRecentResults: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"recentResults/clearRecentResults">;
