import { Negatable } from './common/negatable';
import { DateFieldExpression } from './date-field/date-field';
import { DateRangeFieldExpression } from './date-range-field/date-range-field';
import { ExactMatchExpression } from './exact-match/exact-match';
import { FieldExistsExpression } from './field-exists/field-exists';
import { KeywordExpression } from './keyword/keyword';
import { NearExpression, OtherTerm } from './near/near';
import { NumericFieldExpression } from './numeric-field/numeric-field';
import { NumericRangeFieldExpression } from './numeric-range-field/numeric-range-field';
import { QueryExtensionExpression } from './query-extension/query-extension';
import { StringFacetFieldExpression } from './string-facet-field/string-facet-field';
import { StringFieldExpression } from './string-field/string-field';
export type { KeywordExpression, NearExpression, OtherTerm, ExactMatchExpression, FieldExistsExpression, StringFieldExpression, StringFacetFieldExpression, NumericFieldExpression, NumericRangeFieldExpression, DateFieldExpression, DateRangeFieldExpression, QueryExtensionExpression, Negatable, };
/**
 * A utility to help build query expressions.
 */
export interface QueryExpression {
    /**
     * Adds a `QueryExpression` to the current instance.
     *
     * @param expression - The query expression instance to add.
     * @returns The `QueryExpression` instance.
     */
    addExpression(expression: QueryExpression): QueryExpression;
    /**
     * Adds an expression containing terms to match. Terms can be in any order, and may also be expanded with stemming.
     *
     * @param expression - A keyword expression.
     * @returns The `QueryExpression` instance.
     */
    addKeyword(expression: KeywordExpression): QueryExpression;
    /**
     * Adds an expression that returns all of the items in which the specified `startTerm` appears no more than `maxKeywordsBetween` from the endTerm, for each element in `otherTerms`.
     *
     * @param expression - A near expression.
     * @returns The `QueryExpression` instance.
     */
    addNear(expression: NearExpression): QueryExpression;
    /**
     * Adds an expression that must appear in its entirety, at least once, for an item to be returned.
     *
     * @param expression - An exact match expression.
     * @returns The `QueryExpression` instance.
     */
    addExactMatch(expression: ExactMatchExpression): QueryExpression;
    /**
     * Adds an expression returning all items where the defined field exists.
     *
     * @param expression - A field exists expressions.
     * @returns The `QueryExpression` instance.
     */
    addFieldExists(expression: FieldExistsExpression): QueryExpression;
    /**
     * Adds an expression that uses an `operator` to compare a string `field` against certain `values`.
     * Returns all of the items for which the expression evaluates to true.
     *
     * @param expression - A string field expression.
     * @returns The `QueryExpression` instance.
     */
    addStringField(expression: StringFieldExpression): QueryExpression;
    /**
     * Adds an expression that uses an `operator` to compare a string facet `field` to a `value`.
     * Returns all of the items for which the expression evaluates to true.
     *
     * @param expression - A string facet field expression.
     * @returns The `QueryExpression` instance.
     */
    addStringFacetField(expression: StringFacetFieldExpression): QueryExpression;
    /**
     * Adds an expression that uses an `operator` to compare a numeric `field` to a `value`.
     * Returns all of the items for which the expression evaluates to true.
     *
     * @param expression - A numeric field expression.
     * @returns The `QueryExpression` instance.
     */
    addNumericField(expression: NumericFieldExpression): QueryExpression;
    /**
     * Adds an expression that returns all items for which the `value` of the numeric `field` is within the defined range.
     *
     * @param expression - A numeric field expression.
     * @returns The `QueryExpression` instance.
     */
    addNumericRangeField(expression: NumericRangeFieldExpression): QueryExpression;
    /**
     * Adds an expression that uses an `operator` to compare a date `field` to a `value`.
     * Returns all of the items for which the expression evaluates to true.
     *
     * @param expression - A date field expression.
     * @returns The `QueryExpression` instance.
     */
    addDateField(expression: DateFieldExpression): QueryExpression;
    /**
     * Adds an expression that returns all items for which the `value` of the date `field` is within the defined range.
     *
     * @param expression - A numeric field expression.
     * @returns The `QueryExpression` instance.
     */
    addDateRangeField(expression: DateRangeFieldExpression): QueryExpression;
    /**
     * Adds an expression that invokes a query extension.
     *
     * @param expression - A query extension expression.
     * @returns The `QueryExpression` instance.
     */
    addQueryExtension(expression: QueryExtensionExpression): QueryExpression;
    /**
     * Allows specifying a boolean operator join expressions with. Possible values are `and` and `or`.
     *
     * @param operator - The boolean operator to join individual expressions with.
     * @returns The `QueryExpression` instance.
     */
    joinUsing(operator: BooleanOperator): QueryExpression;
    /**
     * Joins all expressions using the configured boolean operator.
     *
     * @returns A string representation of the configured expressions.
     */
    toQuerySyntax(): string;
}
declare type BooleanOperator = 'and' | 'or';
/**
 * Creates an `QueryExpression` instance.
 *
 * @param config - The expression builder options.
 * @returns An `QueryExpression` instance.
 */
export declare function buildQueryExpression(): QueryExpression;
