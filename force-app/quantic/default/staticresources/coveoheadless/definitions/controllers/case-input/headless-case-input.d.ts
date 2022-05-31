import { CaseAssistEngine } from '../../app/case-assist-engine/case-assist-engine';
import { Controller } from '../controller/headless-controller';
export interface CaseInputOptions {
    field: string;
}
export interface CaseInputProps {
    options: CaseInputOptions;
}
export interface UpdateFetchOptions {
    caseClassifications?: boolean;
    documentSuggestions?: boolean;
}
/**
 * The `CaseInput` controller is responsible for setting and retrieving the value of a single field from the case creation form and optionally trigger Case Assist API requests.
 */
export interface CaseInput extends Controller {
    /**
     * Sets the value of the specified field.
     *
     * @param value - The case input value to set.
     * @param updatesToFetch - A set of flags dictating whether to fetch case assist data after updating the input value.
     */
    update(value: string, updatesToFetch?: UpdateFetchOptions): void;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `CaseInput` controller.
     */
    state: CaseInputState;
}
export interface CaseInputState {
    /**
     * The value of the case input.
     */
    value: string;
}
/**
 * Creates a `Case Input` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `CaseInput` controller properties.
 * @returns A `CaseInput` controller instance.
 */
export declare function buildCaseInput(engine: CaseAssistEngine, props: CaseInputProps): CaseInput;
