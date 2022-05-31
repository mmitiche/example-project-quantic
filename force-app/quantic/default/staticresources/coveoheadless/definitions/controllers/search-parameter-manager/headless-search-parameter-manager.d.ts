import { SearchParameters } from '../../features/search-parameters/search-parameter-actions';
import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
export type { SearchParameters };
export interface SearchParameterManagerProps {
    /**
     * The initial state that should be applied to the `SearchParameterManager` controller.
     */
    initialState: SearchParameterManagerInitialState;
}
export interface SearchParameterManagerInitialState {
    /**
     * The parameters affecting the search response.
     */
    parameters: SearchParameters;
}
/**
 * The `SearchParameterManager` controller allows restoring parameters that affect the results from e.g. a url.
 * */
export interface SearchParameterManager extends Controller {
    /**
     * Updates the search parameters in state with the passed parameters and executes a search. Unspecified keys are reset to their initial values.
     *
     * @param parameters - The search parameters to synchronize.
     */
    synchronize(parameters: SearchParameters): void;
    /**
     * The state relevant to the `SearchParameterManager` controller.
     * */
    state: SearchParameterManagerState;
}
export interface SearchParameterManagerState {
    /**
     * The parameters affecting the search response.
     */
    parameters: SearchParameters;
}
/**
 * Creates a `SearchParameterManager` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `SearchParameterManager` properties.
 * @returns A `SearchParameterManager` controller instance.
 */
export declare function buildSearchParameterManager(engine: SearchEngine, props: SearchParameterManagerProps): SearchParameterManager;
