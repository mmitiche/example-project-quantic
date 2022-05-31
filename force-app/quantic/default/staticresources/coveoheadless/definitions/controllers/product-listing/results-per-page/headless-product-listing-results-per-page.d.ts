import { ProductListingEngine } from '../../../product-listing.index';
import { ResultsPerPage, ResultsPerPageInitialState, ResultsPerPageProps, ResultsPerPageState } from '../../core/results-per-page/headless-core-results-per-page';
export type { ResultsPerPage, ResultsPerPageProps, ResultsPerPageInitialState, ResultsPerPageState, };
/**
 * Creates a `ResultsPerPage` controller instance for the product listing.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `ResultsPerPage` properties.
 * @returns A `ResultsPerPage` controller instance.
 */
export declare function buildResultsPerPage(engine: ProductListingEngine, props?: ResultsPerPageProps): ResultsPerPage;
