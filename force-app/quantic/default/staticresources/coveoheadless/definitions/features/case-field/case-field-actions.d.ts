import { AsyncThunkCaseAssistOptions } from '../../api/service/case-assist/case-assist-api-client';
import { GetCaseClassificationsRequest } from '../../api/service/case-assist/get-case-classifications/get-case-classifications-request';
import { GetCaseClassificationsResponse } from '../../api/service/case-assist/get-case-classifications/get-case-classifications-response';
import { CaseAssistConfigurationSection, CaseFieldSection, CaseInputSection, ConfigurationSection, DebugSection } from '../../state/state-sections';
export interface SetCaseFieldActionCreatorPayload {
    /**
     * The name of the field whose value is being updated (e.g., product, category, model)
     */
    fieldName: string;
    /**
     * The value to set in the state.
     */
    fieldValue: string;
}
export declare const registerCaseField: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetCaseFieldActionCreatorPayload], SetCaseFieldActionCreatorPayload, "caseAssist/caseField/register", never, never>;
export declare const updateCaseField: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetCaseFieldActionCreatorPayload], SetCaseFieldActionCreatorPayload, "caseAssist/caseField/update", never, never>;
export interface FetchClassificationsThunkReturn {
    /** The successful classifications response. */
    response: GetCaseClassificationsResponse;
}
export declare type StateNeededByFetchClassifications = ConfigurationSection & CaseAssistConfigurationSection & CaseFieldSection & CaseInputSection & DebugSection;
export declare const fetchCaseClassifications: import("@reduxjs/toolkit").AsyncThunk<FetchClassificationsThunkReturn, void, AsyncThunkCaseAssistOptions<StateNeededByFetchClassifications>>;
export declare const buildFetchClassificationRequest: (state: StateNeededByFetchClassifications) => Promise<GetCaseClassificationsRequest>;
