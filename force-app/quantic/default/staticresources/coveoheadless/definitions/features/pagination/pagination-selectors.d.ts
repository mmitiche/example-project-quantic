import { PaginationSection } from '../../state/state-sections';
/** Calculates the current page number.
 * @param state SearchPageState.
 * @returns the current page number.
 */
export declare const currentPageSelector: (state: PaginationSection) => number;
/** Calculates the maximum page number
 * @param state SearchPageState.
 * @returns the maximum page number.
 */
export declare const maxPageSelector: (state: PaginationSection) => number;
/** Calculates the current pages relative to the current page.
 * @param state SearchPageState.
 * @param desiredNumberOfPages the number of pages to return.
 * @returns the current page numbers.
 */
export declare const currentPagesSelector: (state: PaginationSection, desiredNumberOfPages: number) => number[];
