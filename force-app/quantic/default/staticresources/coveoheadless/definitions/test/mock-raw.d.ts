import { Raw } from '../api/search/search/raw';
/**
 * For internal use only.
 *
 * Returns the `Raw` property of a `Result`, for testing purposes.
 * @param config - A partial `Raw` property with which to build the target `Raw` property.
 * @returns The new `Raw` property.
 */
export declare function buildMockRaw(config?: Partial<Raw>): Raw;
