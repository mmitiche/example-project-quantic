import { Negatable } from '../common/negatable';
import { StringFacetFieldOperator } from '../common/operator';
import { Part } from '../common/part';
export interface StringFacetFieldExpression extends Negatable {
    /**
     * The field name.
     */
    field: string;
    /**
     * The operator to use when comparing `field` and `value`.
     */
    operator: StringFacetFieldOperator;
    /**
     * The value to match against the field.
     */
    value: string;
}
export declare function buildStringFacetField(config: StringFacetFieldExpression): Part;
