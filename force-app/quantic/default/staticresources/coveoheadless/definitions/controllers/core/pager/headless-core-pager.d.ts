import { CoreEngine } from '../../../app/engine';
import { Controller } from '../../controller/headless-controller';
export interface PagerInitialState {
    /**
     * The initial page number.
     * */
    page?: number;
}
export interface PagerOptions {
    /**
     * The number of pages to display in the pager.
     *
     * @defaultValue `5`
     * */
    numberOfPages?: number;
}
export interface PagerProps {
    /**
     * The options for the `Pager` controller.
     */
    options?: PagerOptions;
    /**
     * The initial state that should be applied to the `Pager` controller.
     */
    initialState?: PagerInitialState;
}
/**
 * The `Pager` controller allows to navigate through the different result pages.
 */
export interface Pager extends Controller {
    /**
     * Updates the results to those on the passed page.
     *
     * @param page - The page number.
     */
    selectPage(page: number): void;
    /**
     * Updates the results to those on the next page.
     * */
    nextPage(): void;
    /**
     * Updates the results to those on the previous page.
     * */
    previousPage(): void;
    /**
     * Returns `true` when the current page is equal to the passed page, and `false` otherwise.
     *
     * @param page - The page number to check.
     * @returns Whether the passed page is selected.
     */
    isCurrentPage(page: number): boolean;
    /**
     * The state of the Pager controller.
     * */
    state: PagerState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `Pager` controller.
 */
export interface PagerState {
    /**
     * The active page number.
     * */
    currentPage: number;
    /**
     * The page range to display.
     * */
    currentPages: number[];
    /**
     * The maximum available page.
     * */
    maxPage: number;
    /**
     * Returns `true` when a previous page is available, and `false` otherwise.
     * */
    hasPreviousPage: boolean;
    /**
     * Returns `true` when a next page is available, and `false` otherwise.
     * */
    hasNextPage: boolean;
}
export declare function buildCorePager(engine: CoreEngine, props?: PagerProps): Pager;
