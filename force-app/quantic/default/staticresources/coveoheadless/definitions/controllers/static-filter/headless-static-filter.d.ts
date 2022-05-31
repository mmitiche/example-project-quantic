import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
import { StaticFilterValue, StaticFilterValueState } from '../../features/static-filter-set/static-filter-set-state';
import { buildStaticFilterValue, StaticFilterValueOptions } from './static-filter-value';
export type { StaticFilterValue, StaticFilterValueState, StaticFilterValueOptions, };
export { buildStaticFilterValue };
export interface StaticFilterProps {
    /**
     * The options for the `StaticFilter` controller.
     */
    options: StaticFilterOptions;
}
export interface StaticFilterOptions {
    /**
     * A unique identifier for the static filter.
     */
    id: string;
    /**
     * The values the static filter is responsible for managing.
     */
    values: StaticFilterValue[];
}
/**
 * The `StaticFilter` controller manages a collection of filter values.
 * */
export interface StaticFilter extends Controller {
    /**
     * Toggles the specified static filter value.
     *
     * @param value - The static filter value to toggle.
     */
    toggleSelect(value: StaticFilterValue): void;
    /**
     * Toggles the specified static filter value, deselecting others.
     *
     * @param value - The static filter value to toggle.
     */
    toggleSingleSelect(value: StaticFilterValue): void;
    /**
     * Deselects all static filter values.
     * */
    deselectAll(): void;
    /**
     * Checks whether the specified static filter value is selected.
     *
     * @param value - The static filter value to check.
     * @returns Whether the specified static filter value is selected.
     */
    isValueSelected(value: StaticFilterValue): boolean;
    /**
     * A state of the `StaticFilter` controller.
     */
    state: StaticFilterState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `StaticFilter` controller.
 */
export interface StaticFilterState {
    /**
     * The static filter id.
     */
    id: string;
    /**
     * The static filter values.
     */
    values: StaticFilterValue[];
    /**
     * `true` if there is at least one non-idle value and `false` otherwise.
     */
    hasActiveValues: boolean;
}
/**
 * Creates a `Static Filter` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Sort` controller properties.
 * @returns A `Sort` controller instance.
 */
export declare function buildStaticFilter(engine: SearchEngine, props: StaticFilterProps): StaticFilter;
