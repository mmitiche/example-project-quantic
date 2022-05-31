import { Negatable } from '../common/negatable';
import { Part } from '../common/part';
export interface FieldExistsExpression extends Negatable {
    /**
     * The field that should be defined on all matching items.
     */
    field: string;
}
export declare function buildFieldExists(config: FieldExistsExpression): Part;
