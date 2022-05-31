import { FacetManager, FacetManagerPayload, FacetManagerState } from '../../facet-manager/headless-facet-manager';
import { ProductListingEngine } from '../../../app/product-listing-engine/product-listing-engine';
export type { FacetManager, FacetManagerState, FacetManagerPayload };
/**
 * Creates a `FacetManager` instance for the product listing.
 *
 * @param productListingEngine - The headless engine.
 */
export declare function buildFacetManager(productListingEngine: ProductListingEngine): FacetManager;
