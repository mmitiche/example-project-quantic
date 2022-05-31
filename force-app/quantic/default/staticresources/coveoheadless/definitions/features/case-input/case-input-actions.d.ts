export interface SetCaseInputActionCreatorPayload {
    /**
     * The name of the field whose value is being updated (e.g., subject, description, product, category).
     */
    fieldName: string;
    /**
     * The value to set in the state.
     */
    fieldValue: string;
}
export declare const updateCaseInput: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetCaseInputActionCreatorPayload], SetCaseInputActionCreatorPayload, "caseAssist/caseInput/update", never, never>;
