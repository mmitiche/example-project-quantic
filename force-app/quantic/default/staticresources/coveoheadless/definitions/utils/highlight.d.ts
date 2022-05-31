export interface HighlightKeyword {
    /**
     * The 0 based offset inside the string where the highlight should start.
     */
    offset: number;
    /**
     * The length of the offset.
     */
    length: number;
}
export interface HighlightParams {
    /**
     * The string to highlight items in.
     */
    content: string;
    /**
     * The highlighted positions to highlight in the string.
     */
    highlights: HighlightKeyword[];
    /**
     * The opening delimiter used when starting to highlight.
     */
    openingDelimiter: string;
    /**
     * The closing delimiter used to close highlighted section.
     */
    closingDelimiter: string;
}
export interface Delimiters {
    /**
     * Opening delimiter
     */
    open: string;
    /**
     * Closing delimiter
     */
    close: string;
}
export interface SuggestionHighlightingOptions {
    /**
     * Delimiters for substrings that do not match the input
     */
    notMatchDelimiters?: Delimiters;
    /**
     * Delimiters for substrings that are exact match of the input
     */
    exactMatchDelimiters?: Delimiters;
    /**
     * Delimiters for substrings that are correction of the input
     */
    correctionDelimiters?: Delimiters;
}
/**
 * Highlight the passed string using specified highlights.
 */
export declare function highlightString(params: HighlightParams): string;
/**
 * Highlight a suggestion with the given delimiters.
 * @param suggestion The suggestion to highlight
 * @param options The object contaning the delimiters used
 */
export declare function getHighlightedSuggestion(suggestion: string, options: SuggestionHighlightingOptions): string;
/**
 * Escapes a string. For more information, refer to {@link https://underscorejs.org/#escape}
 *
 * @param str The string to escape
 */
export declare function escape(str: string): string;
