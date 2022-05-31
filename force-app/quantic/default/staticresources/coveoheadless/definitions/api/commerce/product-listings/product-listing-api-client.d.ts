import { Logger } from 'pino';
import { ProductListingThunkExtraArguments } from '../../../app/product-listing-thunk-extra-arguments';
import { ProductListingAppState } from '../../../state/product-listing-app-state';
import { PreprocessRequest } from '../../preprocess-request';
import { FacetSearchRequest } from '../../search/facet-search/facet-search-request';
import { FacetSearchResponse } from '../../search/facet-search/facet-search-response';
import { FacetSearchAPIClient, SearchAPIClient } from '../../search/search-api-client';
import { ProductListingRequest, ProductListingSuccessResponse } from './product-listing-request';
export interface AsyncThunkProductListingOptions<T extends Partial<ProductListingAppState>> {
    state: T;
    rejectValue: ProductListingAPIErrorStatusResponse;
    extra: ProductListingThunkExtraArguments;
}
/**
 * Initialization options for the `ProductListingAPIClient`.
 */
export interface ProductListingAPIClientOptions {
    logger: Logger;
    preprocessRequest: PreprocessRequest;
}
/**
 * Defines a Product Listing API response. It can represent an error or a successful response.
 */
export declare type ProductListingAPIResponse<TSuccessContent> = ProductListingAPISuccessResponse<TSuccessContent> | ProductListingAPIErrorResponse;
/**
 * Defines a Product Listing API successful response.
 */
export interface ProductListingAPISuccessResponse<TContent> {
    success: TContent;
}
/**
 * Defines the content of a Product Listing API error response.
 */
export interface ProductListingAPIErrorStatusResponse {
    statusCode: number;
    message: string;
    type: string;
}
/**
 * Defines a Product Listing API error response.
 */
export interface ProductListingAPIErrorResponse {
    error: ProductListingAPIErrorStatusResponse;
}
/**
 * The client to use to interface with the Product Listing API.
 */
export declare class ProductListingAPIClient implements FacetSearchAPIClient {
    private options;
    private searchAPIClient;
    constructor(options: ProductListingAPIClientOptions, searchAPIClient: SearchAPIClient);
    /**
     * Retrieves the product listing from the API.
     *
     * @param req - The request parameters.
     * @returns The products for the requested product listing.
     */
    getProducts(req: ProductListingRequest): Promise<ProductListingAPIResponse<ProductListingSuccessResponse>>;
    facetSearch(req: FacetSearchRequest): Promise<FacetSearchResponse>;
}
