import { DateRangeRequest } from '../../../../features/facets/range-facets/date-facet-set/interfaces/request';
import { SearchEngine } from '../../../../app/search-engine/search-engine';
import { DateFacetOptions } from '../../../core/facets/range-facet/date-facet/headless-date-facet-options';
import { buildDateRange, DateFacet, DateFacetProps, DateFacetState, DateRangeInput, DateRangeOptions } from '../../../core/facets/range-facet/date-facet/headless-core-date-facet';
export type { DateFacetOptions, DateRangeInput, DateRangeOptions, DateRangeRequest, DateFacetProps, DateFacet, DateFacetState, };
export { buildDateRange };
/**
 * Creates a `DateFacet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `DateFacet` controller properties.
 * @returns A `DateFacet` controller instance.
 */
export declare function buildDateFacet(engine: SearchEngine, props: DateFacetProps): DateFacet;
