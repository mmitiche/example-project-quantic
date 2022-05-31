import { PlatformResponse } from './platform-client';
import { BaseParam } from './platform-service-params';
import { AllSearchAPIResponse } from './search/search-api-client';
import { SearchAPIErrorWithStatusCode } from './search/search-api-error-response';
export declare function pickNonBaseParams<Params extends BaseParam>(req: Params): Omit<Params, "url" | "accessToken" | "organizationId">;
export declare const unwrapError: (payload: PlatformResponse<AllSearchAPIResponse>) => SearchAPIErrorWithStatusCode;
