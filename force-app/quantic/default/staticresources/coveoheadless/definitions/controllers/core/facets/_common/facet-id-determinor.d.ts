import { CoreEngine } from '../../../../app/engine';
import { AllFacetSections } from '../../../../features/facets/generic/interfaces/generic-facet-section';
interface FacetIdConfig {
    facetId?: string;
    field: string;
}
export declare function determineFacetId(engine: CoreEngine<Partial<AllFacetSections>>, config: FacetIdConfig): string;
export {};
