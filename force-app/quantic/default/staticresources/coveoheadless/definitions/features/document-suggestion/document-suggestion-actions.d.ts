import { AsyncThunkCaseAssistOptions } from '../../api/service/case-assist/case-assist-api-client';
import { GetDocumentSuggestionsRequest } from '../../api/service/case-assist/get-document-suggestions/get-document-suggestions-request';
import { GetDocumentSuggestionsResponse } from '../../api/service/case-assist/get-document-suggestions/get-document-suggestions-response';
import { CaseAssistConfigurationSection, DocumentSuggestionSection, ConfigurationSection, DebugSection, CaseInputSection, CaseFieldSection } from '../../state/state-sections';
export interface FetchDocumentSuggestionsThunkReturn {
    /** The successful document suggestions response. */
    response: GetDocumentSuggestionsResponse;
}
export declare type StateNeededByFetchDocumentSuggestions = ConfigurationSection & CaseAssistConfigurationSection & DocumentSuggestionSection & CaseInputSection & CaseFieldSection & DebugSection;
export declare const fetchDocumentSuggestions: import("@reduxjs/toolkit").AsyncThunk<FetchDocumentSuggestionsThunkReturn, void, AsyncThunkCaseAssistOptions<StateNeededByFetchDocumentSuggestions>>;
export declare const buildFetchDocumentSuggestionsRequest: (state: StateNeededByFetchDocumentSuggestions) => Promise<GetDocumentSuggestionsRequest>;
