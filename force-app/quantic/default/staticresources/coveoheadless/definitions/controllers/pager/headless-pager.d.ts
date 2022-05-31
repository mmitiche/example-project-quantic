import { SearchEngine } from '../../app/search-engine/search-engine';
import { PagerInitialState, PagerOptions, PagerProps, Pager, PagerState } from '../core/pager/headless-core-pager';
export type { PagerInitialState, PagerOptions, PagerProps, Pager, PagerState };
/**
 * Creates a `Pager` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Pager` properties.
 * @returns A `Pager` controller instance.
 * */
export declare function buildPager(engine: SearchEngine, props?: PagerProps): Pager;
