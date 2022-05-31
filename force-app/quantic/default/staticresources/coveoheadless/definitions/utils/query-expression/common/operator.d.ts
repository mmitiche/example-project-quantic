declare type Operator = StringOperator | StringFacetFieldOperator | NumericOperator;
export declare type StringOperator = 'contains' | 'isExactly';
export declare type StringFacetFieldOperator = 'contains' | 'isExactly' | 'phoneticMatch' | 'fuzzyMatch' | 'wildcardMatch' | 'differentThan' | 'regexMatch';
export declare type NumericOperator = 'isExactly' | 'lowerThan' | 'lowerThanOrEqual' | 'greaterThan' | 'greaterThanOrEqual';
export declare function getOperatorSymbol(operator: Operator): string;
export {};
