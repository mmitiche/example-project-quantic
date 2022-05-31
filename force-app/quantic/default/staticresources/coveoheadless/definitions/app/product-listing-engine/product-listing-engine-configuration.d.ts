import { Schema } from '@coveo/bueno';
import { EngineConfiguration } from '../engine-configuration';
/**
 * The product listing engine configuration.
 */
export interface ProductListingEngineConfiguration extends EngineConfiguration {
}
export declare const productListingEngineConfigurationSchema: Schema<ProductListingEngineConfiguration>;
/**
 * Creates a sample product listing engine configuration.
 *
 * @returns The sample product listing engine configuration.
 */
export declare function getSampleProductListingEngineConfiguration(): ProductListingEngineConfiguration;
