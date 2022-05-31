export declare type DictionaryFieldContextPayload = Record<string, string>;
export declare type DictionaryFieldContextState = {
    /**
     * Holds the [dictionary field context](https://docs.coveo.com/en/2036/index-content/about-fields#dictionary-fields) information.
     */
    contextValues: DictionaryFieldContextPayload;
};
export declare function getDictionaryFieldContextInitialState(): DictionaryFieldContextState;
