import { SearchEngine } from '../../app/search-engine/search-engine';
import { QuickviewCoreOptions, QuickviewCoreState, QuickviewCoreProps, QuickviewCore } from '../core/quickview/headless-core-quickview';
export interface QuickviewProps extends QuickviewCoreProps {
}
export interface QuickviewOptions extends QuickviewCoreOptions {
}
export interface Quickview extends QuickviewCore {
}
export interface QuickviewState extends QuickviewCoreState {
}
/**
 * Creates a `Quickview` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Quickview` properties.
 * @returns A `Quickview` controller instance.
 */
export declare function buildQuickview(engine: SearchEngine, props: QuickviewProps): Quickview;
