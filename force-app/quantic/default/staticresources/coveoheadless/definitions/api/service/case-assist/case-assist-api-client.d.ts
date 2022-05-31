import { AsyncThunkOptions } from '../../../app/async-thunk-options';
import { ClientThunkExtraArguments } from '../../../app/thunk-extra-arguments';
import { CaseAssistAppState } from '../../../state/case-assist-app-state';
import { GetCaseClassificationsRequest } from './get-case-classifications/get-case-classifications-request';
import { GetCaseClassificationsResponse } from './get-case-classifications/get-case-classifications-response';
import { GetDocumentSuggestionsRequest } from './get-document-suggestions/get-document-suggestions-request';
import { GetDocumentSuggestionsResponse } from './get-document-suggestions/get-document-suggestions-response';
import { HtmlRequest } from '../../search/html/html-request';
import { HtmlAPIClientOptions } from '../../search/html/html-api-client';
/**
 * Initialization options for the `CaseAssistAPIClient`.
 */
export interface CaseAssistAPIClientOptions extends HtmlAPIClientOptions {
}
export interface AsyncThunkCaseAssistOptions<T extends Partial<CaseAssistAppState>> extends AsyncThunkOptions<T, ClientThunkExtraArguments<CaseAssistAPIClient>> {
    rejectValue: CaseAssistAPIErrorStatusResponse;
}
/**
 * Defines a Case Assist API response. It can represent an error or a successful response.
 */
export declare type CaseAssistAPIResponse<TSuccessContent> = CaseAssistAPISuccessResponse<TSuccessContent> | CaseAssistAPIErrorResponse;
/**
 * Defines a Case Assist API successful response.
 */
export interface CaseAssistAPISuccessResponse<TContent> {
    success: TContent;
}
/**
 * Defines the content of a Case Assist API error response.
 */
export interface CaseAssistAPIErrorStatusResponse {
    statusCode: number;
    message: string;
    type: string;
}
/**
 * Defines a Case Assist API error response.
 */
export interface CaseAssistAPIErrorResponse {
    error: CaseAssistAPIErrorStatusResponse;
}
/**
 * The client to use to interface with the Case Assist API.
 */
export declare class CaseAssistAPIClient {
    private options;
    constructor(options: CaseAssistAPIClientOptions);
    /**
     * Retrieves the case classifications from the API.
     *
     * See https://platform.cloud.coveo.com/docs?urls.primaryName=Customer%20Service#/Suggestions/postClassify
     *
     * @param req - The request parameters.
     * @returns The case classifications grouped by fields for the given case information.
     */
    getCaseClassifications(req: GetCaseClassificationsRequest): Promise<CaseAssistAPIResponse<GetCaseClassificationsResponse>>;
    /**
     * Retrieves the document suggestions from the API.
     *
     * See https://platform.cloud.coveo.com/docs?urls.primaryName=Customer%20Service#/Suggestions/getSuggestDocument
     *
     * @param req - The request parameters.
     * @returns The document suggestions for the given case information and context.
     */
    getDocumentSuggestions(req: GetDocumentSuggestionsRequest): Promise<CaseAssistAPIResponse<GetDocumentSuggestionsResponse>>;
    html(req: HtmlRequest): Promise<{
        success: string;
        error?: undefined;
    } | {
        error: import("../../search/search-api-error-response").SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
}
