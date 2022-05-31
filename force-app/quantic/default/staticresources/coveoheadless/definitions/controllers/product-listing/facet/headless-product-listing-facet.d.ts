import { FacetValueState } from '../../../features/facets/facet-api/value';
import { Facet, FacetOptions, FacetProps, FacetSearch, FacetSearchOptions, FacetSearchState, FacetState, CoreFacetState, CoreFacet, FacetValue, SpecificFacetSearchResult } from '../../core/facets/facet/headless-core-facet';
import { ProductListingEngine } from '../../../app/product-listing-engine/product-listing-engine';
export type { FacetOptions, FacetSearchOptions, FacetValueState, FacetProps, Facet, FacetState, CoreFacetState, CoreFacet, FacetSearch, FacetSearchState, SpecificFacetSearchResult, FacetValue, };
/**
 * Creates a `Facet` controller instance for the product listing.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Facet` properties.
 * @returns A `Facet` controller instance.
 * */
export declare function buildFacet(engine: ProductListingEngine, props: FacetProps): Facet;
