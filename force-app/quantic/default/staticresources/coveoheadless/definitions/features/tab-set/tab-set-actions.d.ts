export interface RegisterTabActionCreatorPayload {
    /**
     * A unique identifier for the tab
     */
    id: string;
    /**
     * The tab filter expression.
     */
    expression: string;
}
export declare const registerTab: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterTabActionCreatorPayload], RegisterTabActionCreatorPayload, "tab/register", never, never>;
export declare const updateActiveTab: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[id: string], string, "tab/updateActiveTab", never, never>;
