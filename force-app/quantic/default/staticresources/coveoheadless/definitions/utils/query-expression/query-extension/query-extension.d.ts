import { Part } from '../common/part';
import { QueryExpression } from '../query-expression';
export interface QueryExtensionExpression {
    /**
     * The query extension name without the leading $ sign. See [Standard Query Extensions](https://docs.coveo.com/en/1462) for examples.
     */
    name: string;
    /**
     * The query extension parameters where applicable.
     */
    parameters: QueryExtensionParameters;
}
declare type QueryExtensionParameters = Record<string, string | QueryExpression>;
export declare function buildQueryExtension(config: QueryExtensionExpression): Part;
export {};
