import { CategoryFacetOptions, CategoryFacetSearchOptions } from '../../core/facets/category-facet/headless-core-category-facet-options';
import { CategoryFacetValue } from '../../../features/facets/category-facet-set/interfaces/response';
import { SearchEngine } from '../../../app/search-engine/search-engine';
import { CategoryFacet, CategoryFacetProps, CategoryFacetState, CategoryFacetSearch, CategoryFacetSearchState, CategoryFacetSearchResult, CoreCategoryFacet, CoreCategoryFacetState } from '../../core/facets/category-facet/headless-core-category-facet';
export type { CategoryFacetValue, CategoryFacetOptions, CategoryFacetSearchOptions, CategoryFacetProps, CategoryFacet, CategoryFacetState, CategoryFacetSearch, CategoryFacetSearchState, CategoryFacetSearchResult, CoreCategoryFacet, CoreCategoryFacetState, };
/**
 * Creates a `CategoryFacet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `CategoryFacet` properties.
 * @returns A `CategoryFacet` controller instance.
 * */
export declare function buildCategoryFacet(engine: SearchEngine, props: CategoryFacetProps): CategoryFacet;
