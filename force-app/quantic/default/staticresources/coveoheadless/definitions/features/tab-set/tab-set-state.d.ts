export declare type TabSetState = Record<string, TabSlice>;
export declare type TabSlice = {
    id: string;
    expression: string;
    isActive: boolean;
};
export declare function getTabSetInitialState(): TabSetState;
