import { Result } from '../api/search/search/result';
/**
 * For internal use only.
 *
 * Returns a `Result` for testing purposes.
 * @param config  - A partial `Result` from which to build the target `Result`.
 * @returns The new `Result`.
 */
export declare function buildMockResult(config?: Partial<Result>): Result;
