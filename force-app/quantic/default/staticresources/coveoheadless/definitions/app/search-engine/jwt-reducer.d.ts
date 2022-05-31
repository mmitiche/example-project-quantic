import { Reducer } from '@reduxjs/toolkit';
import P from 'pino';
export interface CoveoJSONWebToken {
    searchHub?: string;
    pipeline?: string;
    userDisplayName?: string;
}
export declare const jwtReducer: (logger: P.Logger) => Reducer;
