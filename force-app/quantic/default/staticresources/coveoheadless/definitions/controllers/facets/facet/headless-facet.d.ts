import { FacetOptions, FacetSearchOptions } from './headless-facet-options';
import { FacetValueState } from '../../../features/facets/facet-api/value';
import { SearchEngine } from '../../../app/search-engine/search-engine';
import { CoreFacet, CoreFacetState, Facet, FacetProps, FacetSearch, FacetSearchState, FacetState, FacetValue, SpecificFacetSearchResult } from '../../core/facets/facet/headless-core-facet';
export type { FacetOptions, FacetSearchOptions, FacetValueState, FacetProps, Facet, FacetState, FacetSearch, FacetSearchState, SpecificFacetSearchResult, FacetValue, CoreFacet, CoreFacetState, };
/**
 * Creates a `Facet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Facet` properties.
 * @returns A `Facet` controller instance.
 * */
export declare function buildFacet(engine: SearchEngine, props: FacetProps): Facet;
