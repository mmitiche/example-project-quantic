import { CaseAssistEngine } from '../../app/case-assist-engine/case-assist-engine';
import { Controller } from '../controller/headless-controller';
import { CaseAssistAPIErrorStatusResponse } from '../../api/service/case-assist/case-assist-api-client';
import { DocumentSuggestionResponse } from '../../api/service/case-assist/get-document-suggestions/get-document-suggestions-response';
/**
 * The `DocumentSuggestion` controller is responsible for getting document suggestions using case information present in the state.
 */
export interface DocumentSuggestionList extends Controller {
    /**
     * Fetches document suggestions using case information present in the state.
     */
    fetch(): void;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `DocumentSuggestion` controller.
     */
    state: DocumentSuggestionListState;
}
export interface DocumentSuggestionListState {
    /**
     * Whether document suggestions are being retrieved.
     */
    loading: boolean;
    /**
     * The Case Assist API error response.
     */
    error: CaseAssistAPIErrorStatusResponse | null;
    /**
     * The retrieved document suggestions.
     */
    documents: DocumentSuggestionResponse[];
}
/**
 * Creates a `Document Suggestion List` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `DocumentSuggestionList` controller instance.
 */
export declare function buildDocumentSuggestionList(engine: CaseAssistEngine): DocumentSuggestionList;
