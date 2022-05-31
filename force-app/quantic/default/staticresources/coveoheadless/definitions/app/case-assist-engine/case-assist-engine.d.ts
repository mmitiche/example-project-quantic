import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import { CoreEngine, ExternalEngineOptions } from '../engine';
import { CaseAssistAppState } from '../../state/case-assist-app-state';
import { CaseAssistEngineConfiguration } from './case-assist-engine-configuration';
import { CaseAssistThunkExtraArguments } from '../case-assist-thunk-extra-arguments';
export type { CaseAssistEngineConfiguration };
declare const caseassistEngineReducers: {
    debug: import("redux").Reducer<boolean, import("redux").AnyAction>;
    caseAssistConfiguration: import("redux").Reducer<import("../../features/case-assist-configuration/case-assist-configuration-state").CaseAssistConfigurationState, import("redux").AnyAction>;
    searchHub: import("redux").Reducer<string, import("redux").AnyAction>;
};
declare type CaseAssistEngineReducers = typeof caseassistEngineReducers;
declare type CaseAssistEngineState = StateFromReducersMapObject<CaseAssistEngineReducers> & Partial<CaseAssistAppState>;
/**
 * The engine for powering case assist experiences.
 */
export interface CaseAssistEngine<State extends object = {}> extends CoreEngine<State & CaseAssistEngineState, CaseAssistThunkExtraArguments> {
}
/**
 * The case assist engine options.
 */
export interface CaseAssistEngineOptions extends ExternalEngineOptions<CaseAssistEngineState> {
    /**
     * The case assist engine configuration options.
     */
    configuration: CaseAssistEngineConfiguration;
}
/**
 * Creates a case assist engine instance.
 *
 * @param options - The case assist engine options.
 * @returns A case assist engine instance.
 */
export declare function buildCaseAssistEngine(options: CaseAssistEngineOptions): CaseAssistEngine;
