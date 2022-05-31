import { CaseAssistEngine } from '../../app//case-assist-engine/case-assist-engine';
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
 * Creates a `CaseAssistQuickview` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `CaseAssistQuickview` properties.
 * @returns A `CaseAssistQuickview` controller instance.
 */
export declare function buildCaseAssistQuickview(engine: CaseAssistEngine, props: CaseAssistQuickviewProps): CaseAssistQuickview;
