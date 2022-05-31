import { Controller } from '../../../../controller/headless-controller';
import { DateFacetValue } from '../../../../../features/facets/range-facets/date-facet-set/interfaces/response';
import { CoreEngine } from '../../../../../app/engine';
/**
 * The options defining a `DateFilter`.
 */
export interface DateFilterOptions {
    /**
     * The field whose values you want to display in the filter.
     */
    field: string;
    /**
     * A unique identifier for the controller.
     * By default, a unique random identifier is generated.
     */
    facetId?: string;
    /**
     * Whether to exclude folded result parents when estimating the result count for each facet value.
     *
     * @defaultValue `true`
     */
    filterFacetCount?: boolean;
    /**
     * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
     *
     * Note: A high injectionDepth may negatively impact the facet request performance.
     *
     * Minimum: `0`
     *
     * @defaultValue `1000`
     */
    injectionDepth?: number;
}
export interface DateFilterInitialState {
    /**
     * The initial selected range.
     */
    range: DateFilterRange;
}
export interface DateFilterRange {
    /**
     * The starting value for the date range, formatted as `YYYY/MM/DD@HH:mm:ss` or the Relative date format "period-amount-unit"
     */
    start: string;
    /**
     * The ending value for the date range, formatted as `YYYY/MM/DD@HH:mm:ss` or the Relative date format "period-amount-unit"
     */
    end: string;
}
export interface DateFilterProps {
    /**
     * The options for the `DateFilter` controller.
     */
    options: DateFilterOptions;
    /**
     * The initial state.
     */
    initialState?: DateFilterInitialState;
}
export interface DateFilterState {
    /**
     * The facet ID.
     * */
    facetId: string;
    /**
     * The current selected range.
     */
    range?: DateFacetValue;
    /**
     * Returns `true` if a search is in progress, and `false` if not.
     */
    isLoading: boolean;
    /**
     * Whether the filter is enabled and its value is used to filter search results.
     */
    enabled: boolean;
}
/**
 * The `DateFilter` controller makes it possible to create a date filter.
 */
export interface DateFilter extends Controller {
    /**
     * Clears the current filter.
     */
    clear(): void;
    /**
     * Updates the selected range.
     *
     * You can use the `buildDateRange` utility method in order to format the range values correctly.
     *
     * @param range - The date range.
     * @returns Whether the range is valid.
     */
    setRange(range: DateFilterRange): boolean;
    /**
     * Enables the filter. I.e., undoes the effects of `disable`.
     */
    enable(): void;
    /**
     * Disables the filter. I.e., prevents it from filtering results.
     */
    disable(): void;
    /**
     * The state of the `DateFilter` controller.
     */
    state: DateFilterState;
}
export declare function buildCoreDateFilter(engine: CoreEngine, props: DateFilterProps): DateFilter;
