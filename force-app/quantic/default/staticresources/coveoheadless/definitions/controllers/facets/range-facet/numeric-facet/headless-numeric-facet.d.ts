import { NumericRangeRequest } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/request';
import { NumericFacetValue } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/response';
import { SearchEngine } from '../../../../app/search-engine/search-engine';
import { buildNumericRange, NumericFacet, NumericFacetOptions, NumericFacetProps, NumericFacetState, NumericRangeOptions } from '../../../core/facets/range-facet/numeric-facet/headless-core-numeric-facet';
export type { NumericRangeOptions, NumericRangeRequest, NumericFacetValue, NumericFacetOptions, NumericFacetProps, NumericFacet, NumericFacetState, };
export { buildNumericRange };
/**
 * Creates a `NumericFacet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `NumericFacet` properties.
 * @returns A `NumericFacet` controller instance.
 */
export declare function buildNumericFacet(engine: SearchEngine, props: NumericFacetProps): NumericFacet;
