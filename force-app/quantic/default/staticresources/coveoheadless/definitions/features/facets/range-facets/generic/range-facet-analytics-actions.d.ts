import type { FacetRangeMetadata } from 'coveo.analytics/dist/definitions/searchPage/searchPageEvents';
import { SearchAppState } from '../../../../state/search-app-state';
import { RangeFacetSelectionPayload } from './range-facet-validate-payload';
export declare const getRangeFacetMetadata: (state: Partial<SearchAppState>, { facetId, selection }: RangeFacetSelectionPayload) => FacetRangeMetadata;
