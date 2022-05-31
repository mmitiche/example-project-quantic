/**
 * The period to set the date relative to.
 */
export declare type RelativeDatePeriod = 'past' | 'now' | 'next';
/**
 * The unit of time in which the date is set relative to.
 */
export declare type RelativeDateUnit = 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
/**
 * Defines a date relative to the current moment.
 */
export interface RelativeDate {
    /**
     * The relative period of time.
     */
    period: RelativeDatePeriod;
    /**
     * The unit of time in which the date is set relative to. When `period` is set as `now`, the `unit` does not have to be defined.
     */
    unit?: RelativeDateUnit;
    /**
     * The amount of the `unit` of time. When `period` is set as `now`, the `amount` does not have to be defined.
     */
    amount?: number;
}
/**
 * Validates a relative date and throws if it's invalid.
 * @param date The relative date, in `RelativeDate` or string format
 */
export declare function validateRelativeDate(date: RelativeDate | string): void;
export declare function serializeRelativeDate(relativeDate: RelativeDate): string;
export declare function formatRelativeDateForSearchApi(relativeDate: string): string;
export declare function isRelativeDateFormat(date: string): boolean;
export declare function isRelativeDate(date: unknown): date is RelativeDate;
/**
 * Deserializes a relative date string value into a valid `RelativeDate` object.
 * Throws an error if the date is invalid.
 * @param date The string serialized with the format "period-amount-unit"
 * @returns The parsed `RelativeDate` object.
 */
export declare function deserializeRelativeDate(date: string): RelativeDate;
