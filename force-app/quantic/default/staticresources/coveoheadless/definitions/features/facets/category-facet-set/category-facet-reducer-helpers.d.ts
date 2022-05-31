import { CategoryFacetSetState } from './category-facet-set-state';
import { CategoryFacetRequest } from './interfaces/request';
export declare function handleCategoryFacetDeselectAll(state: CategoryFacetSetState, facetId: string): void;
export declare function selectPath(request: CategoryFacetRequest, path: string[], initialNumberOfValues: number): void;
