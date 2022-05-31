import { StaticFilterValue, StaticFilterValueState } from '../../features/static-filter-set/static-filter-set-state';
export interface StaticFilterValueOptions {
    /**
     * A human-readable caption for the expression (e.g., `Youtube`).
     */
    caption: string;
    /**
     * The query filter expression to apply when the value is selected (e.g., `@filetype=="youtubevideo"`).
     */
    expression: string;
    /**
     * The state of the static filter value.
     */
    state?: StaticFilterValueState;
}
/**
 * Creates a `StaticFilterValue`.
 *
 * @param config - The options with which to create a `StaticFilterValue`.
 * @returns A new `StaticFilterValue`.
 */
export declare function buildStaticFilterValue(config: StaticFilterValueOptions): StaticFilterValue;
