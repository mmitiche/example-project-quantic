export declare type HttpMethods = 'POST' | 'GET' | 'DELETE' | 'PUT';
export declare type HTTPContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'text/html';
import { Logger } from 'pino';
import { DisconnectedError, ExpiredTokenError } from '../utils/errors';
import { PreprocessRequest } from './preprocess-request';
export interface PlatformClientCallOptions {
    url: string;
    method: HttpMethods;
    contentType: HTTPContentType;
    headers?: Record<string, string>;
    requestParams: unknown;
    accessToken: string;
    preprocessRequest: PreprocessRequest;
    logger: Logger;
    signal?: AbortSignal;
}
export interface PlatformResponse<T> {
    body: T;
    response: Response;
}
export declare type PlatformClientCallError = ExpiredTokenError | DisconnectedError | Error;
export declare class PlatformClient {
    static call(options: PlatformClientCallOptions): Promise<Response | PlatformClientCallError>;
}
declare type PlatformCombination = {
    env: 'dev';
    region: 'us' | 'eu';
} | {
    env: 'qa';
    region: 'us' | 'eu';
} | {
    env: 'hipaa';
    region: 'us';
} | {
    env: 'prod';
    region: 'us' | 'eu' | 'au';
};
declare type PlatformEnvironment = PlatformCombination['env'];
interface URLOptions<E extends PlatformEnvironment> {
    environment?: E;
    region?: Extract<PlatformCombination, {
        env: E;
    }>['region'];
    multiRegionSubDomain?: string;
}
export declare function platformUrl<E extends PlatformEnvironment>(options?: URLOptions<E>): string;
export declare function analyticsUrl<E extends PlatformEnvironment = 'prod'>(options?: URLOptions<E>): string;
export {};
