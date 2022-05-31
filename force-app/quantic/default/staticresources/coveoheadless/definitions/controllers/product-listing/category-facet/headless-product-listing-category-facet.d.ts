import { CategoryFacetOptions, CategoryFacetSearchOptions } from '../../core/facets/category-facet/headless-core-category-facet-options';
import { CategoryFacetValue } from '../../../features/facets/category-facet-set/interfaces/response';
import { CoreCategoryFacet, CoreCategoryFacetState, CategoryFacet, CategoryFacetProps, CategoryFacetState, CategoryFacetSearch, CategoryFacetSearchState, CategoryFacetSearchResult } from '../../core/facets/category-facet/headless-core-category-facet';
import { ProductListingEngine } from '../../../app/product-listing-engine/product-listing-engine';
export type { CoreCategoryFacet, CoreCategoryFacetState, CategoryFacetValue, CategoryFacetOptions, CategoryFacetSearchOptions, CategoryFacetProps, CategoryFacet, CategoryFacetState, CategoryFacetSearch, CategoryFacetSearchState, CategoryFacetSearchResult, };
/**
 * Creates a `CategoryFacet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `CategoryFacet` properties.
 * @returns A `CategoryFacet` controller instance.
 * */
export declare function buildCategoryFacet(engine: ProductListingEngine, props: CategoryFacetProps): CategoryFacet;
