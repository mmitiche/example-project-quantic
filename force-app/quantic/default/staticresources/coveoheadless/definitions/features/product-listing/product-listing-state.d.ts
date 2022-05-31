import { ProductListingAPIErrorStatusResponse } from '../../api/commerce/product-listings/product-listing-api-client';
import { ProductRecommendation } from '../../api/search/search/product-recommendation';
import { AnyFacetResponse } from '../facets/generic/interfaces/generic-facet-response';
export interface ProductListingState {
    url: string;
    clientId: string;
    additionalFields: string[];
    advancedParameters: {
        debug: boolean;
    };
    products: ProductRecommendation[];
    facets: {
        results: AnyFacetResponse[];
    };
    error: ProductListingAPIErrorStatusResponse | null;
    isLoading: boolean;
    responseId: string;
}
export declare const getProductListingInitialState: () => ProductListingState;
