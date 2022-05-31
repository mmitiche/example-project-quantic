export declare const loadReducerError: Error;
export declare class ExpiredTokenError extends Error {
    constructor();
}
export declare class DisconnectedError extends Error {
    statusCode: number;
    constructor(url: string, statusCode?: number);
}
