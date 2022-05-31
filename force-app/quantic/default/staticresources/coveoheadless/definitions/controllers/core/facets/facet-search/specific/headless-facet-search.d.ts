import { FacetSearchOptions } from '../../../../../features/facets/facet-search-set/facet-search-request-options';
import { SpecificFacetSearchResult } from '../../../../../api/search/facet-search/specific-facet-search/specific-facet-search-response';
import { ConfigurationSection, FacetSearchSection } from '../../../../../state/state-sections';
import { CoreEngine } from '../../../../../app/engine';
export interface FacetSearchProps {
    options: FacetSearchOptions;
    select: (value: SpecificFacetSearchResult) => void;
}
export declare type FacetSearch = ReturnType<typeof buildFacetSearch>;
export declare function buildFacetSearch(engine: CoreEngine<FacetSearchSection & ConfigurationSection>, props: FacetSearchProps): {
    /**
     * Selects the provided value.
     * @param result A single specificFacetSearchResult object
     */
    select(value: SpecificFacetSearchResult): void;
    /**
     * Selects the provided value, and deselects other values.
     * @param result A single specificFacetSearchResult object
     */
    singleSelect(value: SpecificFacetSearchResult): void;
    state: {
        values: {
            count: number;
            displayValue: string;
            rawValue: string;
        }[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    } | {
        values: {
            count: number;
            displayValue: string;
            rawValue: string;
        }[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    };
    updateText(text: string): void;
    showMoreResults(): void;
    search(): void;
    clear(): void;
    updateCaptions(captions: Record<string, string>): void;
};
