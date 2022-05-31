import { Negatable } from '../common/negatable';
import { Part } from '../common/part';
export interface ExactMatchExpression extends Negatable {
    /**
     * An expression that must appear in its entirety at least once for an item to be returned.
     *
     * e.g. specifying `Star Wars` will only return items containing the exact phrase.
     */
    expression: string;
}
export declare function buildExactMatch(config: ExactMatchExpression): Part;
