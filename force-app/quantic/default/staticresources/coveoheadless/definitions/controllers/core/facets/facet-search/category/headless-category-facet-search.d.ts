import { FacetSearchOptions } from '../../../../../features/facets/facet-search-set/facet-search-request-options';
import { CategoryFacetSearchResult } from '../../../../../api/search/facet-search/category-facet-search/category-facet-search-response';
import { CategoryFacetSearchSection, ConfigurationSection } from '../../../../../state/state-sections';
import { CoreEngine } from '../../../../../app/engine';
export interface CategoryFacetSearchProps {
    options: FacetSearchOptions;
}
export declare type CategoryFacetSearch = ReturnType<typeof buildCoreCategoryFacetSearch>;
export declare function buildCoreCategoryFacetSearch(engine: CoreEngine<CategoryFacetSearchSection & ConfigurationSection>, props: CategoryFacetSearchProps): {
    select(value: CategoryFacetSearchResult): void;
    state: {
        values: CategoryFacetSearchResult[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    } | {
        values: CategoryFacetSearchResult[];
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
