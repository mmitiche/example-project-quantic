import { Negatable } from '../common/negatable';
import { StringOperator } from '../common/operator';
import { Part } from '../common/part';
export interface StringFieldExpression extends Negatable {
    /**
     * The field name.
     */
    field: string;
    /**
     * The operator to use when comparing `field` and `values`.
     */
    operator: StringOperator;
    /**
     * The values to match against the field.
     */
    values: string[];
}
export declare function buildStringField(config: StringFieldExpression): Part;
