import { Unsubscribe } from '@reduxjs/toolkit';
import { CoreEngine } from '../../app/engine';
export interface Subscribable {
    /**
     * Adds a callback that's invoked on state change.
     *
     * @param listener A callback that's invoked on state change.
     * @returns A function to remove the listener.
     */
    subscribe(listener: () => void): Unsubscribe;
}
export interface Controller extends Subscribable {
    readonly state: {};
}
export declare function buildController<T extends object>(engine: CoreEngine<T>): Controller;
