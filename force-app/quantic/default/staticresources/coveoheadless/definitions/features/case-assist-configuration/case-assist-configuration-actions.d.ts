export interface SetCaseAssistConfigurationActionCreatorPayload {
    /**
     * The unique identifier of the target case assist configuration. See [Retrieving a Case Assist ID](https://docs.coveo.com/en/3328/service/manage-case-assist-configurations#retrieving-a-case-assist-id).
     */
    caseAssistId: string;
    /**
     * The locale of the current user. Must comply with IETF’s BCP 47 definition: https://www.rfc-editor.org/rfc/bcp/bcp47.txt.
     */
    locale?: string;
}
export declare const setCaseAssistConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetCaseAssistConfigurationActionCreatorPayload], SetCaseAssistConfigurationActionCreatorPayload, "caseAssistConfiguration/set", never, never>;
