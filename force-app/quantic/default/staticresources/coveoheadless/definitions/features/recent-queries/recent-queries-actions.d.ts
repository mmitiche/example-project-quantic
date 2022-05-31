export interface RegisterRecentQueriesCreatorPayload {
    /**
     * The recent queries made by the user prior to instantiating the controller.
     */
    queries: string[];
    /**
     * The maximum number of queries to retain in the list.
     */
    maxLength: number;
}
export declare const registerRecentQueries: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterRecentQueriesCreatorPayload], RegisterRecentQueriesCreatorPayload, "recentQueries/registerRecentQueries", never, never>;
export declare const clearRecentQueries: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"recentQueries/clearRecentQueries">;
