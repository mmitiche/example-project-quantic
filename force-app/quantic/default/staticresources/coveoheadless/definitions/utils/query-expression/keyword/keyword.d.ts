import { Negatable } from '../common/negatable';
import { Part } from '../common/part';
export interface KeywordExpression extends Negatable {
    /**
     * An expression containing terms to match. Terms can be in any order, and may also be expanded with stemming.
     *
     * e.g. specifying `Star Wars` will return items containing either `Star` or `Wars` or both.
     */
    expression: string;
}
export declare function buildKeyword(config: KeywordExpression): Part;
