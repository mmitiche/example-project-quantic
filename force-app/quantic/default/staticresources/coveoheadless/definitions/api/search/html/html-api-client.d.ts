import { HtmlRequest } from './html-request';
import { SearchAPIErrorWithStatusCode } from '../search-api-error-response';
import { Logger } from 'pino';
import { PreprocessRequest } from '../../preprocess-request';
export interface HtmlApiClient {
    html: (req: HtmlRequest) => Promise<{
        success: string;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
}
export interface HtmlAPIClientOptions {
    logger: Logger;
    preprocessRequest: PreprocessRequest;
}
export declare const getHtml: (req: HtmlRequest, options: HtmlAPIClientOptions) => Promise<{
    success: string;
    error?: undefined;
} | {
    error: SearchAPIErrorWithStatusCode;
    success?: undefined;
}>;
