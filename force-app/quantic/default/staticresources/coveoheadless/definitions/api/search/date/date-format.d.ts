import dayjs from 'dayjs';
export declare const API_DATE_FORMAT = "YYYY/MM/DD@HH:mm:ss";
export declare type AbsoluteDate = string | number | Date;
export declare function formatDateForSearchApi(date: dayjs.Dayjs): string;
export declare function isSearchApiDate(date: string): boolean;
export declare function validateAbsoluteDate(date: AbsoluteDate, dateFormat?: string): void;
export declare function assertDateAboveAPIMinimum(date: dayjs.Dayjs): void;
