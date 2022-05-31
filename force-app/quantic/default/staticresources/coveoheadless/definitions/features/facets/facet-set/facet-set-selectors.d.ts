import { ProductListingSection, SearchSection } from '../../../state/state-sections';
import { FacetSection } from '../../../state/state-sections';
import { FacetResponse, FacetValue } from './interfaces/response';
export declare type FacetResponseSection = SearchSection | ProductListingSection;
export declare const baseFacetResponseSelector: (state: Partial<FacetResponseSection>, id: string) => import("../range-facets/date-facet-set/interfaces/response").DateFacetResponse | import("../range-facets/numeric-facet-set/interfaces/response").NumericFacetResponse | FacetResponse | undefined;
export declare const facetRequestSelector: (state: FacetSection, id: string) => import("./interfaces/request").FacetRequest;
export declare const facetResponseSelector: (state: FacetResponseSection & FacetSection, facetId: string) => FacetResponse | undefined;
export declare const facetResponseSelectedValuesSelector: (state: FacetResponseSection & FacetSection, facetId: string) => FacetValue[];
export declare const isFacetLoadingResponseSelector: (state: FacetResponseSection) => boolean;
