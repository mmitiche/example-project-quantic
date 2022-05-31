import { DateFilter, DateFilterInitialState, DateFilterOptions, DateFilterProps, DateFilterRange, DateFilterState } from '../../../core/facets/range-facet/date-facet/headless-core-date-filter';
import { ProductListingEngine } from '../../../../app/product-listing-engine/product-listing-engine';
export type { DateFilterOptions, DateFilterInitialState, DateFilterRange, DateFilterProps, DateFilterState, DateFilter, };
export declare function buildDateFilter(engine: ProductListingEngine, props: DateFilterProps): DateFilter;
