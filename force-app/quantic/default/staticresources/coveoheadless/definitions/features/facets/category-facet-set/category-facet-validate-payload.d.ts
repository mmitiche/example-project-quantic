import { FacetValueState } from '../facet-api/value';
import { Value, NumberValue, StringValue, ArrayValue, BooleanValue } from '@coveo/bueno';
import { CategoryFacetValue } from './interfaces/response';
export declare const categoryFacetValueDefinition: {
    state: Value<FacetValueState>;
    numberOfResults: NumberValue;
    value: StringValue<string>;
    path: ArrayValue<import("@coveo/bueno").PrimitivesValues>;
    moreValuesAvailable: BooleanValue;
};
export declare function validateCategoryFacetValue(payload: CategoryFacetValue): void;
