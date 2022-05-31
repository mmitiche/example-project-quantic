import { CaseAssistAPIErrorStatusResponse } from '../../api/service/case-assist/case-assist-api-client';
import { DocumentSuggestionResponse } from '../../api/service/case-assist/get-document-suggestions/get-document-suggestions-response';
export declare const getDocumentSuggestionInitialState: () => DocumentSuggestionState;
export interface DocumentSuggestionStatus {
    /**
     * `true` if a request is in progress and `false` otherwise.
     */
    loading: boolean;
    /**
     * The Case Assist API error response.
     */
    error: CaseAssistAPIErrorStatusResponse | null;
    /**
     * The ID of the response.
     */
    lastResponseId: string;
}
export interface DocumentSuggestionState {
    /**
     * The status of the document suggestions request.
     */
    status: DocumentSuggestionStatus;
    /**
     * The retrieved document suggestions.
     */
    documents: DocumentSuggestionResponse[];
}
