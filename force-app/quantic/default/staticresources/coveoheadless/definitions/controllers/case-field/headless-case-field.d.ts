import { CaseAssistAPIErrorStatusResponse } from '../../api/service/case-assist/case-assist-api-client';
import { CaseAssistEngine } from '../../app/case-assist-engine/case-assist-engine';
import { CaseFieldSuggestion } from '../../features/case-field/case-field-state';
import { Controller } from '../controller/headless-controller';
export interface CaseFieldProps {
    options?: CaseFieldOptions;
}
export interface CaseFieldOptions {
    field: string;
}
export interface CaseFieldState {
    /**
     * Whether suggestions are being retrieved for the field.
     */
    loading: boolean;
    /**
     * The error that occurred while fetching suggestions, if any.
     */
    error: CaseAssistAPIErrorStatusResponse | null;
    /**
     * The current field value.
     */
    value: string;
    /**
     * The field suggestions.
     */
    suggestions: CaseFieldSuggestion[];
}
/**
 * The `CaseField` controller is responsible for setting the value and retrieving suggestions for a field from the case creation form and optionally trigger Case Assist API requests.
 */
export interface CaseField extends Controller {
    /**
     * Sets the value of the specified field.
     *
     * @param value - The field value to set.
     * @param updatesToFetch - A set of flags dictating whether to fetch case assist data after updating the field value.
     * @param autoSelection - A flag indicating whether the update was triggered by an automatic selection.
     */
    update(value: string, updatesToFetch?: UpdateCaseFieldFetchOptions, autoSelection?: boolean): void;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `CaseField` controller.
     */
    state: CaseFieldState;
}
export interface UpdateCaseFieldFetchOptions {
    caseClassifications?: boolean;
    documentSuggestions?: boolean;
}
/**
 * Creates a `CaseField` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `CaseField` controller properties.
 * @returns A `CaseField` controller instance.
 */
export declare function buildCaseField(engine: CaseAssistEngine, props?: CaseFieldProps): CaseField;
