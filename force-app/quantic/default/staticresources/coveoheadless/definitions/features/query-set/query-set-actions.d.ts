export interface RegisterQuerySetQueryActionCreatorPayload {
    /**
     * The unique identifier of the target query.
     */
    id: string;
    /**
     * The initial basic query expression.
     */
    query: string;
}
export declare const registerQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterQuerySetQueryActionCreatorPayload], RegisterQuerySetQueryActionCreatorPayload, "querySet/register", never, never>;
export interface UpdateQuerySetQueryActionCreatorPayload {
    /**
     * The unique identifier of the target query.
     */
    id: string;
    /**
     * The new basic query expression.
     */
    query: string;
}
export declare const updateQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateQuerySetQueryActionCreatorPayload], UpdateQuerySetQueryActionCreatorPayload, "querySet/update", never, never>;
