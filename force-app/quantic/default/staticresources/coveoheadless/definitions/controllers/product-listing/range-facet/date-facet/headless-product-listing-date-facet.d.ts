import { DateRangeRequest } from '../../../../features/facets/range-facets/date-facet-set/interfaces/request';
import { DateFacetValue } from '../../../../features/facets/range-facets/date-facet-set/interfaces/response';
import { DateFacetOptions } from '../../../core/facets/range-facet/date-facet/headless-date-facet-options';
import { buildDateRange, DateFacet, DateFacetProps, DateFacetState, DateRangeInput, DateRangeOptions } from '../../../core/facets/range-facet/date-facet/headless-core-date-facet';
import { ProductListingEngine } from '../../../../app/product-listing-engine/product-listing-engine';
export type { DateFacetOptions, DateFacetValue, DateRangeInput, DateRangeOptions, DateRangeRequest, DateFacetProps, DateFacet, DateFacetState, };
export { buildDateRange };
/**
 * Creates a `DateFacet` controller instance for the product listing.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `DateFacet` controller properties.
 * @returns A `DateFacet` controller instance.
 */
export declare function buildDateFacet(engine: ProductListingEngine, props: DateFacetProps): DateFacet;
