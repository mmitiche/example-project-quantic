import { ReducersMapObject, Reducer } from '@reduxjs/toolkit';
export interface ReducerManager {
    combinedReducer: Reducer;
    add(newReducers: ReducersMapObject): void;
    containsAll(newReducers: ReducersMapObject): boolean;
    addCrossReducer(reducer: Reducer): void;
}
export declare function createReducerManager(initialReducers: ReducersMapObject): ReducerManager;
