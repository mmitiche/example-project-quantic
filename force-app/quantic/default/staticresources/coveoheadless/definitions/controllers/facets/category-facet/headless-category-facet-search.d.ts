import { CategoryFacetSearchProps } from '../../core/facets/facet-search/category/headless-category-facet-search';
import { CoreEngine } from '../../../app/engine';
import { CategoryFacetSearchSection, ConfigurationSection } from '../../../state/state-sections';
import { CategoryFacetSearchResult } from '../../core/facets/category-facet/headless-core-category-facet';
import { SearchThunkExtraArguments } from '../../../app/search-thunk-extra-arguments';
export declare function buildCategoryFacetSearch(engine: CoreEngine<CategoryFacetSearchSection & ConfigurationSection, SearchThunkExtraArguments>, props: CategoryFacetSearchProps): {
    select: (value: CategoryFacetSearchResult) => void;
    state: {
        values: import("../../../api/search/facet-search/category-facet-search/category-facet-search-response").CategoryFacetSearchResult[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    } | {
        values: import("../../../api/search/facet-search/category-facet-search/category-facet-search-response").CategoryFacetSearchResult[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    } | {
        values: import("../../../api/search/facet-search/category-facet-search/category-facet-search-response").CategoryFacetSearchResult[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    } | {
        values: import("../../../api/search/facet-search/category-facet-search/category-facet-search-response").CategoryFacetSearchResult[];
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
