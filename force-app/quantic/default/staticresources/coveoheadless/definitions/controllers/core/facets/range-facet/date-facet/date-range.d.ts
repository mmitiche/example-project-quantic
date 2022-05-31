import { DateRangeRequest } from '../../../../../features/facets/range-facets/date-facet-set/interfaces/request';
import { FacetValueState } from '../../../../../features/facets/facet-api/value';
import { AbsoluteDate } from '../../../../../api/search/date/date-format';
import { RelativeDate } from '../../../../../api/search/date/relative-date';
export declare type DateRangeInput = AbsoluteDate | RelativeDate;
export interface DateRangeOptions {
    /**
     * The starting value for the date range. A date range can be either absolute or [relative](https://docs.coveo.com/en/headless/latest/reference/search/search-date-facet-controller/relative-date-format/).
     */
    start: DateRangeInput;
    /**
     * The ending value for the date range. A date range can be either absolute or [relative](https://docs.coveo.com/en/headless/latest/reference/search/search-date-facet-controller/relative-date-format/).
     */
    end: DateRangeInput;
    /**
     * Whether to include the end value in the range.
     *
     * @defaultValue `false`
     */
    endInclusive?: boolean;
    /**
     * The current facet value state.
     *
     * @defaultValue `idle`
     */
    state?: FacetValueState;
    /**
     * Allows specifying a custom string date format. See [Day.js](https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens) for possible parsing tokens. Assumes [ISO 8601](https://day.js.org/docs/en/parse/string) format by default.
     */
    dateFormat?: string;
    /**
     * If `true`, the date will be returned unshifted. If `false`, the date will be adjusted to UTC time.
     *
     * @deprecated No adjusments to UTC are being made. Please use the `timezone` engine configuration option instead.
     */
    useLocalTime?: boolean;
}
/**
 * Creates a `DateRangeRequest`.
 *
 * @param config - The options with which to create a `DateRangeRequest`.
 * @returns A new `DateRangeRequest`.
 */
export declare function buildDateRange(config: DateRangeOptions): DateRangeRequest;
