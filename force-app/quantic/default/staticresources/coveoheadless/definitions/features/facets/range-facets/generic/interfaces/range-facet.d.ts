import { DateFacetRequest, DateRangeRequest } from '../../date-facet-set/interfaces/request';
import { NumericFacetRequest, NumericRangeRequest } from '../../numeric-facet-set/interfaces/request';
import { DateFacetValue, DateFacetResponse } from '../../date-facet-set/interfaces/response';
import { NumericFacetValue, NumericFacetResponse } from '../../numeric-facet-set/interfaces/response';
import { RegisterDateFacetActionCreatorPayload } from '../../date-facet-set/date-facet-actions';
import { RegisterNumericFacetActionCreatorPayload } from '../../numeric-facet-set/numeric-facet-actions';
export declare type RangeFacetRequest = DateFacetRequest | NumericFacetRequest;
export declare type RangeValueRequest = DateRangeRequest | NumericRangeRequest;
export declare type RangeFacetRegistrationOptions = RegisterDateFacetActionCreatorPayload | RegisterNumericFacetActionCreatorPayload;
export declare type RangeFacetValue = DateFacetValue | NumericFacetValue;
export declare type RangeFacetResponse = DateFacetResponse | NumericFacetResponse;
