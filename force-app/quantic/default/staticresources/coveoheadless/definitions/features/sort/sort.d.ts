import { RecordValue } from '@coveo/bueno';
export declare enum SortBy {
    Relevance = "relevance",
    Fields = "fields"
}
export declare enum SortDirection {
    Ascending = "asc",
    Descending = "desc"
}
export declare type SortByRelevance = {
    by: SortBy.Relevance;
};
export declare type SortByFieldsFields = {
    name: string;
    direction?: SortDirection;
};
export declare type SortByFields = {
    by: SortBy.Fields;
    fields: SortByFieldsFields[];
};
export declare type SortCriterion = SortByRelevance | SortByFields;
export declare const buildRelevanceSortCriterion: () => SortByRelevance;
export declare const buildFieldsSortCriterion: (fields: SortByFieldsFields[]) => SortByFields;
export declare const sortCriterionDefinition: RecordValue;
