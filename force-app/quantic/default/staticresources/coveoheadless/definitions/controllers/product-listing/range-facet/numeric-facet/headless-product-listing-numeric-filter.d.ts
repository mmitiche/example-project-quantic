import { NumericFilterOptions, NumericFilterInitialState, NumericFilterRange, NumericFilterProps, NumericFilterState, NumericFilter } from '../../../core/facets/range-facet/numeric-facet/headless-core-numeric-filter';
import { ProductListingEngine } from '../../../../app/product-listing-engine/product-listing-engine';
export type { NumericFilterOptions, NumericFilterInitialState, NumericFilterRange, NumericFilterProps, NumericFilterState, NumericFilter, };
export declare function buildNumericFilter(engine: ProductListingEngine, props: NumericFilterProps): NumericFilter;
