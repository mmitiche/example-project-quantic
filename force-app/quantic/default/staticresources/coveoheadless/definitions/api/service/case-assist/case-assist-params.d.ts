import { HTTPContentType, HttpMethods } from '../../platform-client';
import { BaseParam } from '../../platform-service-params';
export interface CaseAssistIdParam {
    caseAssistId: string;
}
export interface CaseFields {
    [fieldName: string]: {
        value: string;
    };
}
export interface FieldsParam {
    fields: CaseFields;
}
export declare type CaseAssistParam = BaseParam & CaseAssistIdParam;
/**
 * Builds a base request for calling the Case Assist API.
 *
 * @param req - The Case Assist request parameters.
 * @param method - The HTTP method used to issue the request.
 * @param contentType - The request content type.
 * @param path - The request path, relative to the Case Assist path.
 * @param queryStringArguments - The arguments to pass in the query string.
 * @returns The built request information.
 */
export declare const baseCaseAssistRequest: (req: CaseAssistParam, method: HttpMethods, contentType: HTTPContentType, path: string, queryStringArguments?: Record<string, string>) => {
    accessToken: string;
    method: HttpMethods;
    contentType: HTTPContentType;
    url: string;
};
export declare const prepareSuggestionRequestFields: (fields: CaseFields) => CaseFields;
export declare const prepareContextFromFields: (fields: CaseFields) => Record<string, string | string[]>;
