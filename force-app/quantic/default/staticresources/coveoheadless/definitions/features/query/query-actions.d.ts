export interface UpdateQueryActionCreatorPayload {
    /**
     * The basic query expression (e.g., `acme tornado seeds`).
     */
    q?: string;
    /**
     * Whether to interpret advanced [Coveo Cloud query syntax](https://docs.coveo.com/en/1814/searching-with-coveo/search-prefixes-and-operators) in the query.
     */
    enableQuerySyntax?: boolean;
}
export declare const updateQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateQueryActionCreatorPayload], UpdateQueryActionCreatorPayload, "query/updateQuery", never, never>;
