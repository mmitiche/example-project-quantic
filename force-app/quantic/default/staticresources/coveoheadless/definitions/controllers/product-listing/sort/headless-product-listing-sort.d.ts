import { ProductListingEngine } from '../../../app/product-listing-engine/product-listing-engine';
import { SortDirection, SortBy, SortByRelevance, SortByFieldsFields, SortByFields, SortCriterion, buildRelevanceSortCriterion, buildFieldsSortCriterion } from '../../../features/sort/sort';
import { Controller } from '../../controller/headless-controller';
export type { SortByRelevance, SortByFields, SortByFieldsFields, SortCriterion };
export { SortBy, SortDirection, buildRelevanceSortCriterion, buildFieldsSortCriterion, };
export interface ProductListingSortProps {
    /**
     * The initial state that should be applied to this `Sort` controller.
     */
    initialState?: ProductListingSortInitialState;
}
export interface ProductListingSortInitialState {
    /**
     * The initial sort criterion to register in state.
     */
    criterion?: SortCriterion;
}
export interface ProductListingSort extends Controller {
    /**
     * Updates the sort criterion and executes a new query.
     *
     * @param criterion - The new sort criterion.
     */
    sortBy(criterion: SortCriterion): void;
    /**
     * Checks whether the specified sort criterion matches the value in state.
     *
     * @param criterion - The criterion to compare.
     * @returns `true` if the passed sort criterion matches the value in state, and `false` otherwise.
     */
    isSortedBy(criterion: SortCriterion): boolean;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `Sort` controller.
     */
    state: ProductListingSortState;
}
export interface ProductListingSortState {
    /**
     * The current sort criterion.
     */
    sort: SortCriterion;
}
/**
 * Creates a `Sort` controller instance for the product listing.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Sort` controller properties.
 * @returns A `Sort` controller instance.
 */
export declare function buildSort(engine: ProductListingEngine, props?: ProductListingSortProps): ProductListingSort;
