import { RecordValue } from '@coveo/bueno';
/**
 * The available sort orders.
 */
export declare enum SortOrder {
    Ascending = "ascending",
    Descending = "descending"
}
/**
 * The available criteria that can be used to sort query results.
 */
export declare enum SortBy {
    /**
     * Uses standard index ranking factors (adjacency, TDIDF) and custom ranking expressions (QREs and QRFs) to compute a ranking score for each query result item, and sorts the query results by descending score value.
     */
    Relevancy = "relevancy",
    /**
     * Uses only custom ranking expressions (QREs and QRFs) to compute a ranking score for each query result item, and sorts the query results by descending score value.
     */
    QRE = "qre",
    /**
     * Uses the date field to sort the query results. This field typically contains the last modification date of each item. May be in ascending or descending order.
     */
    Date = "date",
    /**
     * Uses the value of a specific sortable field to sort the query results. May be in ascending or descending order.
     */
    Field = "field",
    /**
     * Does not sort the query results; the index will return result items in an essentially random order.
     */
    NoSort = "nosort"
}
/**
 * Uses standard index ranking factors (adjacency, TDIDF) and custom ranking expressions (QREs and QRFs) to compute a ranking score for each query result item, and sorts the query results by descending score value.
 */
export declare type SortByRelevancy = {
    by: SortBy.Relevancy;
};
/**
 * Uses only custom ranking expressions (QREs and QRFs) to compute a ranking score for each query result item, and sorts the query results by descending score value.
 */
export declare type SortByQRE = {
    by: SortBy.QRE;
};
/**
 * Uses the date field to sort the query results. This field typically contains the last modification date of each item. May be in ascending or descending order.
 */
export declare type SortByDate = {
    by: SortBy.Date;
    order: SortOrder;
};
/**
 * Uses the value of a specific sortable field to sort the query results. May be in ascending or descending order.
 */
export declare type SortByField = {
    by: SortBy.Field;
    field: string;
    order: SortOrder;
};
/**
 * Does not sort the query results; the index will return result items in an essentially random order.
 */
export declare type SortByNoSort = {
    by: SortBy.NoSort;
};
/** Represents a criterion that can be used to sort query results. */
export declare type SortCriterion = SortByRelevancy | SortByQRE | SortByDate | SortByField | SortByNoSort;
/**
 * Builds a sort expression that can be understood and executed by the Coveo Platform.
 * @param criterion The criterion to translate to a valid sort query expression.
 */
export declare const buildCriterionExpression: (criterion: SortCriterion | SortCriterion[]) => string;
/**
 * Utility function that builds a valid `SortByRelevancy` criterion.
 * @returns A `SortByRelevancy` criterion.
 */
export declare const buildRelevanceSortCriterion: () => SortByRelevancy;
/**
 * Utility function that builds a valid `SortByDate` criterion.
 * @param order The order (ascending/descending) on which to sort.
 * @returns A `SortByDate` criterion.
 */
export declare const buildDateSortCriterion: (order: SortOrder) => SortByDate;
/**
 * Utility function that builds a valid `SortByField` criterion.
 * @param field The sortable field on which to sort.
 * @param order The order (ascending/descending) on which to sort.
 * @returns A `SortByField` criterion.
 */
export declare const buildFieldSortCriterion: (field: string, order: SortOrder) => SortByField;
/**
 * Utility function that builds a valid `SortByQRE` criterion.
 * @returns A `SortByQRE` criterion.
 */
export declare const buildQueryRankingExpressionSortCriterion: () => SortByQRE;
/**
 * Utility function that builds a valid `SortByNoSort` criterion.
 * @returns A `SortByNoSort` criterion.
 */
export declare const buildNoSortCriterion: () => SortByNoSort;
export declare const criterionDefinition: RecordValue;
