import { SearchEngine } from '../../../../app/search-engine/search-engine';
import { NumericFilterOptions, NumericFilterInitialState, NumericFilterRange, NumericFilterProps, NumericFilterState, NumericFilter } from '../../../core/facets/range-facet/numeric-facet/headless-core-numeric-filter';
export type { NumericFilterOptions, NumericFilterInitialState, NumericFilterRange, NumericFilterProps, NumericFilterState, NumericFilter, };
/**
 * Creates a `NumericFilter` controller instance.
 * @param engine - The headless engine.
 * @param props - The configurable `NumericFilter` controller properties.
 * @returns A `NumericFilter` controller instance.
 */
export declare function buildNumericFilter(engine: SearchEngine, props: NumericFilterProps): NumericFilter;
