import { Result } from '../../../api/search/search/result';
import { Controller } from '../../controller/headless-controller';
import { CoreEngine } from '../../..';
export interface QuickviewCoreProps {
    /**
     * The options for the `QuickviewCore` controller.
     */
    options: QuickviewCoreOptions;
}
export interface QuickviewCoreOptions {
    /**
     * The result to retrieve a quickview for.
     */
    result: Result;
    /**
     * The maximum preview size to retrieve, in bytes. By default, the full preview is retrieved.
     */
    maximumPreviewSize?: number;
}
export interface QuickviewCore extends Controller {
    /**
     * Retrieves the preview content for the configured result.
     */
    fetchResultContent(): void;
    /**
     * The state for the `QuickviewCore` controller.
     */
    state: QuickviewCoreState;
}
export interface QuickviewCoreState {
    /**
     * The result preview HTML content.
     *
     * @default ""
     */
    content: string;
    /**
     * `true` if the configured result has a preview, and `false` otherwise.
     */
    resultHasPreview: boolean;
    /**
     * `true` if content is being fetched, and `false` otherwise.
     */
    isLoading: boolean;
}
/**
 * Creates a Quickview controller core instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `QuickviewCore` properties.
 * @param fetchResultContentCallback - The callback to be triggered after executing fetchResultContent.
 * @returns A `QuickviewCore` controller instance.
 */
export declare function buildQuickviewCore(engine: CoreEngine, props: QuickviewCoreProps, fetchResultContentCallback?: () => void): QuickviewCore;
