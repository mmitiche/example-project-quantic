import { CategoryFacetSearchProps } from '../../core/facets/facet-search/category/headless-category-facet-search';
import { CategoryFacetSearchResult } from '../../core/facets/category-facet/headless-core-category-facet';
import { CoreEngine } from '../../../app/engine';
import { CategoryFacetSearchSection, ConfigurationSection, ProductListingSection } from '../../../state/state-sections';
import { ProductListingThunkExtraArguments } from '../../../app/product-listing-thunk-extra-arguments';
export declare function buildCategoryFacetSearch(engine: CoreEngine<ProductListingSection & CategoryFacetSearchSection & ConfigurationSection, ProductListingThunkExtraArguments>, props: CategoryFacetSearchProps): {
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
