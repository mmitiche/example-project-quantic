import { CoreEngine } from '../../../../app/engine';
import { AnyFacetValueRequest } from '../../../../features/facets/generic/interfaces/generic-facet-request';
export interface AnyFacetValuesCondition<T extends AnyFacetValueRequest> {
    /**
     * The `facetId` of the facet whose values are used as input by the condition.
     */
    parentFacetId: string;
    /**
     * A callback function that must evaluate to `true` for the condition to be met.
     * @example
     * ```ts
     * const fileTypeHasSomeSelectedValue: AnyFacetValueCondition<FacetValueRequest> = {
     *   parentFacetId: 'filetype',
     *   condition: (parentValues) => parentValues.some(value => value.state === 'selected')
     * }
     * ```
     * .
     * @param parentValues - The current values of the facet whose `facetId` is the `parentFacetId` value.
     * @returns Whether the condition is met.
     */
    condition(parentValues: T[]): boolean;
}
export interface FacetConditionsManagerProps {
    /**
     * The `facetId` of the facet to enable or disable depending on whether conditions are met.
     */
    facetId: string;
    /**
     * The conditions to evaluate.
     *
     * * If any of these conditions is met, the dependent facet is enabled.
     * * If none of these conditions is met, the dependent facet is disabled.
     */
    conditions: AnyFacetValuesCondition<AnyFacetValueRequest>[];
}
export interface FacetConditionsManager {
    /**
     * Unsubscribes the target facet from this managers' conditions.
     */
    stopWatching(): void;
}
/**
 * A manager that enables or disables a facet based on whether target conditions are met.
 * @param engine - The headless engine.
 * @param props - The configurable `FacetConditionsManager` properties.
 * @returns A new facet conditions manager.
 */
export declare function buildFacetConditionsManager(engine: CoreEngine, props: FacetConditionsManagerProps): FacetConditionsManager;
