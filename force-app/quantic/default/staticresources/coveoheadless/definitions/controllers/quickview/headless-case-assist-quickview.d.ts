import { SearchEngine } from '../../app/search-engine/search-engine';
import { QuickviewCoreOptions, QuickviewCoreState, QuickviewCoreProps, QuickviewCore } from '../core/quickview/headless-core-quickview';
export interface CaseAssistQuickviewProps extends QuickviewCoreProps {
}
export interface CaseAssistQuickviewOptions extends QuickviewCoreOptions {
}
export interface CaseAssistQuickview extends QuickviewCore {
}
export interface CaseAssistQuickviewState extends QuickviewCoreState {
}
/**
 * Creates a `Quickview` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Quickview` properties.
 * @returns A `Quickview` controller instance.
 */
export declare function buildCaseAssistQuickview(engine: SearchEngine, props: CaseAssistQuickviewProps): CaseAssistQuickview;
