import { ProductListingSuccessResponse } from '../api/commerce/product-listings/product-listing-request';
import { FetchProductListingThunkReturn } from '../features/product-listing/product-listing-actions';
export declare function buildFetchProductListingResponse(response?: Partial<ProductListingSuccessResponse>): FetchProductListingThunkReturn;
