import { AnyFacetResponse } from '../../../features/facets/generic/interfaces/generic-facet-response';
import { ProductRecommendation } from '../../search/search/product-recommendation';
import { ProductListingsParam } from './product-listing-params';
export declare type ProductListingRequest = ProductListingsParam;
export declare const buildProductListingRequest: (req: ProductListingRequest) => {
    requestParams: {
        url: string;
        clientId?: string | undefined;
        additionalFields?: string[] | undefined;
        advancedParameters?: {
            debug?: boolean | undefined;
        } | undefined;
        facets?: {
            requests: import("../../../features/facets/generic/interfaces/generic-facet-request").AnyFacetRequest[];
            options?: import("../../../features/facet-options/facet-options").FacetOptions | undefined;
        } | undefined;
        sort?: import("../../../product-listing.index").SortCriterion | undefined;
    };
    url: string;
    method: import("../../platform-client").HttpMethods;
    accessToken: string;
    contentType: import("../../platform-client").HTTPContentType;
};
/**
 * Defines the content of a successful response from the `/commerce/products/listing` API call.
 */
export interface ProductListingSuccessResponse {
    facets: {
        results: AnyFacetResponse[];
    };
    products: ProductRecommendation[];
    pagination: {
        totalCount: number;
    };
    responseId: string;
}
