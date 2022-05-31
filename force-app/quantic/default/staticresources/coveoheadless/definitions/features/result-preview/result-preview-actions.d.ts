import { HtmlRequestOptions } from '../../api/search/html/html-request';
import { StateNeededByHtmlEndpoint } from './result-preview-request-builder';
import { ClientThunkExtraArguments } from '../../app/thunk-extra-arguments';
import { HtmlApiClient } from '../../api/search/html/html-api-client';
import { AsyncThunkOptions } from '../../app/async-thunk-options';
import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
interface FetchResultContentResponse {
    content: string;
    uniqueId: string;
}
export interface AsyncThunkGlobalOptions<T> extends AsyncThunkOptions<T, ClientThunkExtraArguments<HtmlApiClient>> {
    rejectValue: SearchAPIErrorWithStatusCode;
}
export declare const fetchResultContent: import("@reduxjs/toolkit").AsyncThunk<FetchResultContentResponse, HtmlRequestOptions, AsyncThunkGlobalOptions<StateNeededByHtmlEndpoint>>;
export {};
