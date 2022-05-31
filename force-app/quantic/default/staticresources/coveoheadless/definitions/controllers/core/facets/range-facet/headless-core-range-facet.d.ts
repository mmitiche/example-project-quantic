import { RangeFacetResponse, RangeFacetRequest } from '../../../../features/facets/range-facets/generic/interfaces/range-facet';
import { RangeFacetSortCriterion } from '../../../../features/facets/range-facets/generic/interfaces/request';
import { ConfigurationSection, FacetOptionsSection, SearchSection } from '../../../../state/state-sections';
import { CoreEngine } from '../../../../app/engine';
export declare type RangeFacet = ReturnType<typeof buildCoreRangeFacet>;
export declare type RangeFacetProps<T extends RangeFacetRequest> = {
    facetId: string;
    getRequest: () => T;
};
export declare function buildCoreRangeFacet<T extends RangeFacetRequest, R extends RangeFacetResponse>(engine: CoreEngine<ConfigurationSection & SearchSection & FacetOptionsSection>, props: RangeFacetProps<T>): {
    isValueSelected: (selection: import("../../../../features/facets/range-facets/generic/interfaces/range-facet").RangeFacetValue) => boolean;
    deselectAll(): void;
    sortBy(criterion: RangeFacetSortCriterion): void;
    isSortedBy(criterion: RangeFacetSortCriterion): boolean;
    enable(): void;
    disable(): void;
    state: {
        facetId: string;
        values: R["values"];
        sortCriterion: RangeFacetSortCriterion;
        hasActiveValues: boolean;
        isLoading: boolean;
        enabled: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
interface AssertRangeFacetOptions {
    generateAutomaticRanges: boolean;
    currentValues?: unknown[];
}
export declare function assertRangeFacetOptions(options: AssertRangeFacetOptions, controllerName: 'buildNumericFacet' | 'buildDateFacet'): void;
export {};
