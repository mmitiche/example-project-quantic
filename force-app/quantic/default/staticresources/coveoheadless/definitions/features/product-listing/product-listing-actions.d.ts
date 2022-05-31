import { CategoryFacetSection, ConfigurationSection, DateFacetSection, FacetOptionsSection, FacetOrderSection, FacetSection, NumericFacetSection, PaginationSection, ProductListingSection, StructuredSortSection } from '../../state/state-sections';
import { AsyncThunkProductListingOptions } from '../../api/commerce/product-listings/product-listing-api-client';
import { ProductListingRequest, ProductListingSuccessResponse } from '../../api/commerce/product-listings/product-listing-request';
export interface SetProductListingUrlPayload {
    /**
     * The url used to determine which product listing to fetch.
     */
    url: string;
}
export declare const setProductListingUrl: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetProductListingUrlPayload], SetProductListingUrlPayload, "productlisting/setUrl", never, never>;
export interface SetAdditionalFieldsPayload {
    /**
     * The additional fields to fetch with the product listing.
     */
    additionalFields: string[];
}
export declare const setAdditionalFields: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetAdditionalFieldsPayload], SetAdditionalFieldsPayload, "productlisting/setAdditionalFields", never, never>;
export declare type StateNeededByFetchProductListing = ConfigurationSection & ProductListingSection & Partial<PaginationSection & StructuredSortSection & FacetSection & NumericFacetSection & CategoryFacetSection & DateFacetSection & FacetOptionsSection & FacetOrderSection>;
export interface FetchProductListingThunkReturn {
    /** The successful search response. */
    response: ProductListingSuccessResponse;
}
export declare const fetchProductListing: import("@reduxjs/toolkit").AsyncThunk<FetchProductListingThunkReturn, void, AsyncThunkProductListingOptions<StateNeededByFetchProductListing>>;
export declare const buildProductListingRequest: (state: StateNeededByFetchProductListing) => Promise<ProductListingRequest>;
