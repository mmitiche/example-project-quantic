import { NumericRangeRequest } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/request';
import { NumericFacetValue } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/response';
import { buildNumericRange, NumericFacet, NumericFacetOptions, NumericFacetProps, NumericFacetState, NumericRangeOptions } from '../../../core/facets/range-facet/numeric-facet/headless-core-numeric-facet';
import { ProductListingEngine } from '../../../../app/product-listing-engine/product-listing-engine';
export type { NumericRangeOptions, NumericRangeRequest, NumericFacetValue, NumericFacetOptions, NumericFacetProps, NumericFacet, NumericFacetState, };
export { buildNumericRange };
/**
 * Creates a `NumericFacet` controller instance for the product listing.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `NumericFacet` properties.
 * @returns A `NumericFacet` controller instance.
 */
export declare function buildNumericFacet(engine: ProductListingEngine, props: NumericFacetProps): NumericFacet;
