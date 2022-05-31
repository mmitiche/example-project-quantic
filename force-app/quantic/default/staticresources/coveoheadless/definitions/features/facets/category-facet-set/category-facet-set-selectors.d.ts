import { CategoryFacetSection } from '../../../state/state-sections';
import { FacetResponseSection } from '../facet-set/facet-set-selectors';
import { CategoryFacetResponse } from './interfaces/response';
export declare const categoryFacetResponseSelector: (state: CategoryFacetSection & Partial<FacetResponseSection>, facetId: string) => CategoryFacetResponse | undefined;
export declare const categoryFacetRequestSelector: (state: CategoryFacetSection, id: string) => import("./interfaces/request").CategoryFacetRequest | undefined;
export declare const categoryFacetSelectedValuesSelector: (state: CategoryFacetSection & Partial<FacetResponseSection>, facetId: string) => import("./interfaces/response").CategoryFacetValue[];
