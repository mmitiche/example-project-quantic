import { SearchEngine } from '../../../../app/search-engine/search-engine';
import { DateFilter, DateFilterInitialState, DateFilterOptions, DateFilterProps, DateFilterRange, DateFilterState } from '../../../core/facets/range-facet/date-facet/headless-core-date-filter';
export type { DateFilterOptions, DateFilterInitialState, DateFilterRange, DateFilterProps, DateFilterState, DateFilter, };
/**
 * Creates a `DateFilter` controller instance.
 * @param engine - The headless engine.
 * @param props - The configurable `DateFilter` controller properties.
 * @returns A `DateFilter` controller instance.
 */
export declare function buildDateFilter(engine: SearchEngine, props: DateFilterProps): DateFilter;
