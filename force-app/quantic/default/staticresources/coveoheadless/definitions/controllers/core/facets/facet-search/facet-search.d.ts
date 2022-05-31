import { SpecificFacetSearchState } from '../../../../features/facets/facet-search-set/specific/specific-facet-search-set-state';
import { CategoryFacetSearchState } from '../../../../features/facets/facet-search-set/category/category-facet-search-set-state';
import { FacetSearchOptions } from '../../../../features/facets/facet-search-set/facet-search-request-options';
import { CategoryFacetSearchSection, ConfigurationSection, FacetSearchSection } from '../../../../state/state-sections';
import { CoreEngine } from '../../../../app/engine';
import { ClientThunkExtraArguments } from '../../../../app/thunk-extra-arguments';
import { FacetSearchAPIClient } from '../../../../api/search/search-api-client';
declare type FacetSearchState = SpecificFacetSearchState | CategoryFacetSearchState;
export interface GenericFacetSearchProps<T extends FacetSearchState> {
    options: FacetSearchOptions;
    getFacetSearch: () => T;
}
export declare type GenericFacetSearch = ReturnType<typeof buildGenericFacetSearch>;
export declare function buildGenericFacetSearch<T extends FacetSearchState>(engine: CoreEngine<ConfigurationSection & (FacetSearchSection | CategoryFacetSearchSection), ClientThunkExtraArguments<FacetSearchAPIClient>>, props: GenericFacetSearchProps<T>): {
    /** Updates the facet search query.
     * @param text The new query.
     */
    updateText(text: string): void;
    /** Increases number of results returned by numberOfResults */
    showMoreResults(): void;
    /** Executes a facet search to update the values.*/
    search(): void;
    /** Resets the query and empties the values. */
    clear(): void;
    /**
     * Updates the facet value captions.
     * @param captions - A dictionary that maps index field values to facet value display names.
     */
    updateCaptions(captions: Record<string, string>): void;
    readonly state: {
        values: T["response"]["values"];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    } | {
        values: T["response"]["values"];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    };
};
export {};
