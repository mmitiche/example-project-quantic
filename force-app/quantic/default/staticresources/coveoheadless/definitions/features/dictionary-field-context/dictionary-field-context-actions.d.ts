import { DictionaryFieldContextPayload } from './dictionary-field-context-state';
export declare const setContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: DictionaryFieldContextPayload], DictionaryFieldContextPayload, "dictionaryFieldContext/set", never, never>;
export interface AddDictionaryFieldContextActionCreatorPayload {
    /**
     * The name of the dictionary field.
     */
    field: string;
    /**
     * The dictionary field key to return the value of.
     */
    key: string;
}
export declare const addContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: AddDictionaryFieldContextActionCreatorPayload], AddDictionaryFieldContextActionCreatorPayload, "dictionaryFieldContext/add", never, never>;
export declare const removeContext: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "dictionaryFieldContext/remove", never, never>;
