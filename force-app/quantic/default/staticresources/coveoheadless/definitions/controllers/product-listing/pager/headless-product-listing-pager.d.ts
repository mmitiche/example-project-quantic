import { PagerInitialState, PagerOptions, PagerProps, Pager, PagerState } from '../../core/pager/headless-core-pager';
import { ProductListingEngine } from '../../../app/product-listing-engine/product-listing-engine';
export type { PagerInitialState, PagerOptions, PagerProps, Pager, PagerState };
/**
 * Creates a `Pager` controller instance for the product listing.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Pager` properties.
 * @returns A `Pager` controller instance.
 * */
export declare function buildPager(engine: ProductListingEngine, props?: PagerProps): Pager;
