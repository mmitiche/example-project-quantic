import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import { CoreEngine, ExternalEngineOptions } from '../engine';
import { ProductListingEngineConfiguration, getSampleProductListingEngineConfiguration } from './product-listing-engine-configuration';
import { ProductListingAppState } from '../../state/product-listing-app-state';
import { ProductListingThunkExtraArguments } from '../product-listing-thunk-extra-arguments';
export type { ProductListingEngineConfiguration };
export { getSampleProductListingEngineConfiguration };
declare const productListingEngineReducers: {
    productListing: import("redux").Reducer<import("../../features/product-listing/product-listing-state").ProductListingState, import("redux").AnyAction>;
};
declare type ProductListingEngineReducers = typeof productListingEngineReducers;
declare type ProductListingEngineState = StateFromReducersMapObject<ProductListingEngineReducers> & Partial<ProductListingAppState>;
/**
 * The engine for powering production listing experiences.
 */
export interface ProductListingEngine<State extends object = {}> extends CoreEngine<State & ProductListingEngineState, ProductListingThunkExtraArguments> {
}
/**
 * The product listing engine options.
 */
export interface ProductListingEngineOptions extends ExternalEngineOptions<ProductListingEngineState> {
    /**
     * The product listing engine configuration options.
     */
    configuration: ProductListingEngineConfiguration;
}
/**
 * Creates a product listing engine instance.
 *
 * @param options - The product listing engine options.
 * @returns A product listing engine instance.
 */
export declare function buildProductListingEngine(options: ProductListingEngineOptions): ProductListingEngine;
