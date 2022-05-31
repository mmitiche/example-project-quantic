import { Negatable } from '../common/negatable';
import { Part } from '../common/part';
export interface NearExpression extends Negatable {
    /**
     * The reference term.
     */
    startTerm: string;
    /**
     * The other terms to check against the reference term. See [NEAR](https://docs.coveo.com/en/1814/#near) for an example.
     */
    otherTerms: OtherTerm[];
}
export interface OtherTerm {
    /**
     * The term to check against the reference term.
     */
    endTerm: string;
    /**
     * The maximum number of keywords that should exist between the current term and the reference term.
     */
    maxKeywordsBetween: number;
}
export declare function buildNear(config: NearExpression): Part;
