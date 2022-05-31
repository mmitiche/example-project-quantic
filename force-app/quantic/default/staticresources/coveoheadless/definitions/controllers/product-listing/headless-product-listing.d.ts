import { Controller } from '../controller/headless-controller';
import { ProductListingEngine } from '../../app/product-listing-engine/product-listing-engine';
import { ProductRecommendation } from '../../product-listing.index';
import { ProductListingAPIErrorStatusResponse } from '../../api/commerce/product-listings/product-listing-api-client';
export interface ProductListingOptions {
    /**
     * The initial URL used to retrieve the product listing.
     */
    url: string;
    /**
     * The initial additional fields to retrieve with the product listing.
     */
    additionalFields?: string[];
}
export interface ProductListingProps {
    /**
     * The initial options that should be applied to this `ProductListing` controller.
     */
    options?: ProductListingOptions;
}
/**
 * The `ProductListing` controller allows the end user to configure and retrieve product listing data.
 */
export interface ProductListing extends Controller {
    /**
     * Changes the current URL used to retrieve product listing.
     * @param url - The new URL.
     */
    setUrl(url: string): void;
    /**
     * Sets the additional fields to request in addition to the standard commerce fields.
     * @param additionalFields - The new additional fields.
     */
    setAdditionalFields(additionalFields: string[]): void;
    /**
     * Refreshes the product listing.
     */
    refresh(): void;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `ProductListing` controller.
     * */
    state: ProductListingState;
}
export interface ProductListingState {
    products: ProductRecommendation[];
    error: ProductListingAPIErrorStatusResponse | null;
    isLoading: boolean;
    responseId: string;
    additionalFields: string[];
    url: string;
}
export declare type ProductListingControllerState = ProductListing['state'];
/**
 * Creates a `ProductListingController` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `ProductListingController` properties.
 * @returns A `ProductListingController` controller instance.
 */
export declare function buildProductListing(engine: ProductListingEngine, props?: ProductListingProps): ProductListing;
