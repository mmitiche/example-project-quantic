import { Negatable } from '../common/negatable';
import { NumericOperator } from '../common/operator';
import { Part } from '../common/part';
export interface NumericFieldExpression extends Negatable {
    /**
     * The field name.
     */
    field: string;
    /**
     * The operator to use when comparing `field` and `value`.
     */
    operator: NumericOperator;
    /**
     * The value to match against the field.
     */
    value: number;
}
export declare function buildNumericField(config: NumericFieldExpression): Part;
