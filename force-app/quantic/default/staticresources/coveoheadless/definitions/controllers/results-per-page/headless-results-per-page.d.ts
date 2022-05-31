import { SearchEngine } from '../../app/search-engine/search-engine';
import { ResultsPerPage, ResultsPerPageInitialState, ResultsPerPageProps, ResultsPerPageState } from '../core/results-per-page/headless-core-results-per-page';
export type { ResultsPerPage, ResultsPerPageProps, ResultsPerPageInitialState, ResultsPerPageState, };
/**
 * Creates a `ResultsPerPage` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `ResultsPerPage` properties.
 * @returns A `ResultsPerPage` controller instance.
 */
export declare function buildResultsPerPage(engine: SearchEngine, props?: ResultsPerPageProps): ResultsPerPage;
