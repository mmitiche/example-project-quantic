import { Negatable } from '../common/negatable';
import { Part } from '../common/part';
export interface NumericRangeFieldExpression extends Negatable {
    /**
     * The field name.
     */
    field: string;
    /**
     * The start of the range.
     */
    from: number;
    /**
     * The end of the range.
     */
    to: number;
}
export declare function buildNumericRangeField(config: NumericRangeFieldExpression): Part;
