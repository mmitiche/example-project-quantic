import { Negatable } from '../common/negatable';
import { Part } from '../common/part';
export interface DateRangeFieldExpression extends Negatable {
    /**
     * The field name.
     */
    field: string;
    /**
     * The start of the range. For absolute dates, please use form YYYY/MM/DD. For relative dates, please refer to the supported [date/time operators](https://docs.coveo.com/en/1814/#datetime-operators).
     */
    from: string;
    /**
     * The end of the range. For absolute dates, please use form YYYY/MM/DD. For relative dates, please refer to the supported [date/time operators](https://docs.coveo.com/en/1814/#datetime-operators).
     */
    to: string;
}
export declare function buildDateRangeField(config: DateRangeFieldExpression): Part;
