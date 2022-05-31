import { ContextPayload, ContextValue } from './context-state';
export declare const setContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: ContextPayload], ContextPayload, "context/set", never, never>;
export interface AddContextActionCreatorPayload {
    /**
     * The name of the key to store the context value in.
     */
    contextKey: string;
    /**
     * The context value.
     */
    contextValue: ContextValue;
}
export declare const addContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: AddContextActionCreatorPayload], {
    contextKey: string;
    contextValue: ContextValue;
}, "context/add", never, never>;
export declare const removeContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "context/remove", never, never>;
