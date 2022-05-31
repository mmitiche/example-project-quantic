import { HistoryState } from './history-state';
export declare const undo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"history/undo">;
export declare const redo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"history/redo">;
export declare const snapshot: import("@reduxjs/toolkit").ActionCreatorWithPayload<HistoryState, string>;
export declare const back: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
export declare const forward: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
export declare const change: import("@reduxjs/toolkit").AsyncThunk<HistoryState | undefined, void, {}>;
