import { PlanResponseSuccess } from './plan-response';
/**
 * The plan of execution of a search request.
 */
export declare class ExecutionPlan {
    private response;
    constructor(response: PlanResponseSuccess);
    /**
     * Gets the final value of the basic expression (`q`) after the search request has been processed in the query pipeline, but before it is sent to the index.
     */
    get basicExpression(): string;
    /**
     * Gets the final value of the large expression (`lq`) after the search request has been processed in the query pipeline, but before it is sent to the index.
     */
    get largeExpression(): string;
    /**
     * Gets the URL to redirect the browser to, if the search request satisfies the condition of a `redirect` trigger rule in the query pipeline.
     *
     * Returns `null` otherwise.
     */
    get redirectionUrl(): string | null;
}
