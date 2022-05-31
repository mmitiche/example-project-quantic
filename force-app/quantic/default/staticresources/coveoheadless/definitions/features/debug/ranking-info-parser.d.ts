export interface RankingInformation {
    /**
     * The attributes of the document that contributed to its ranking.
     * */
    documentWeights: DocumentWeights | null;
    /**
     * The weight attributed to each term in the query.
     */
    termsWeight: TermWeightReport | null;
    /**
     * The sum of all weights.
     */
    totalWeight: number | null;
    /**
     * The weights applied by query ranking expressions.
     */
    qreWeights: QueryRankingExpressionWeights[];
}
export interface DocumentWeights {
    /**
     * The effect of proximity of query terms in the document. More weight is given to documents having the terms closer together.
     */
    Adjacency: number;
    /**
     * The weight attributed to user ratings.
     */
    'Collaborative rating': number;
    /**
     * The weight assigned through an [indexing pipeline extension (IPE)](https://docs.coveo.com/en/206/) for the item.
     */
    Custom: number;
    /**
     * The weight attributed to the document date.
     */
    Date: number;
    /**
     * The weight applied by a [query ranking expression (QRE)](https://docs.coveo.com/en/2777/).
     */
    QRE: number;
    /**
     * The weight attributed to rank of the document in the documents remaining after filtering indexed items by query terms and user permissions.
     * See [item weighting](https://docs.coveo.com/en/1624/#phase-2-item-weighting) for more information.
     */
    Quality: number;
    /**
     * The weight applied by a [ranking function](https://docs.coveo.com/en/1448/).
     */
    'Ranking functions': number;
    /**
     * The effect of the reputation of the document source on the ranking.
     */
    Source: number;
    /**
     * The weight attributed to presence of query terms in the document title.
     */
    Title: number;
    /**
     * Custom factors affecting the document weight.
     */
    [key: string]: number;
}
export interface QueryRankingExpressionWeights {
    /**
     * The query ranking expression (QRE).
     */
    expression: string;
    /**
     * The score added by the query ranking expression (QRE).
     */
    score: number;
}
export declare type TermWeightReport = Record<string, StemmedTermInformation>;
export interface StemmedTermInformation {
    Weights: TermWeights | null;
    terms: Record<string, TermWeightsPerDocument>;
}
interface TermWeights {
    /**
     * The weight allocated when query terms have a special casing in the document.
     */
    Casing: number;
    /**
     * The weight allocated to the presence of query terms in the automatically populated '@concepts' field of the document.
     */
    Concept: number;
    /**
     * The weight allocated when query terms are formatted in the document (e.g., heading level, bold, large, etc.).
     */
    Formatted: number;
    /**
     * The weight allocated based on the number of times query terms appear in the document.
     */
    Frequency: number;
    /**
     * The weight allocated when the document contains words with the same root as the query terms.
     *
     * @example
     * Searching for `programmer` will match documents with `programmer`, `programmers`, `program`, `programming`, etc.
     */
    Relation: number;
    /**
     * The weight allocated when the document summary contains query terms.
     */
    Summary: number;
    /**
     * The weight allocated when the document title contains query terms.
     */
    Title: number;
    /**
     * The weight allocated when the document URI contains query terms.
     */
    URI: number;
    /**
     * Custom factors affecting the term weight.
     */
    [key: string]: number;
}
interface TermWeightsPerDocument {
    /**
     * Captures the likelihood that query term expansions are related to the original query term. Documents containing highly correlated expansions are ranked higher than ones containing poorly correlated expansions.
     *
     * @example
     *
     * When you search for `universe`, because of the way the stemming algorithm works, the index expands the query using terms from the `univer` stem classes that can include `university`. When the terms `universe` and `university` rarely co-occur in your indexed items, items containing `university` are ranked lower.
     */
    Correlation: number;
    /**
     * The number of times a queried keyword appears in a given item, offset by the number of items in the index containing that keyword (see [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)).
     */
    'TF-IDF': number;
}
export declare const parseRankingInfo: (value: string) => {
    documentWeights: DocumentWeights | null;
    termsWeight: TermWeightReport | null;
    totalWeight: number | null;
    qreWeights: QueryRankingExpressionWeights[];
} | null;
export {};
