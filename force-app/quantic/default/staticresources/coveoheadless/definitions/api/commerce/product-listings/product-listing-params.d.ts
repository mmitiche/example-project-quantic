import { FacetOptions } from '../../../features/facet-options/facet-options';
import { AnyFacetRequest } from '../../../features/facets/generic/interfaces/generic-facet-request';
import { HTTPContentType, HttpMethods, PlatformClientCallOptions } from '../../platform-client';
import { SortCriterion } from '../../../features/sort/sort';
export interface ProductListingsParam extends ProductListingBaseParam, ProductListingRequestParam {
}
export interface ProductListingBaseParam {
    accessToken: string;
    organizationId: string;
    platformUrl: string;
    version?: string;
}
export interface ProductListingRequestParam {
    url: string;
    clientId?: string;
    additionalFields?: string[];
    advancedParameters?: {
        debug?: boolean;
    };
    facets?: {
        requests: AnyFacetRequest[];
        options?: FacetOptions;
    };
    sort?: SortCriterion;
}
/**
 * Builds a base request for calling the Product Listing API.
 *
 * @param req - The Product Listing request parameters.
 * @param method - The HTTP method used to issue the request.
 * @param contentType - The request content type.
 * @param queryStringArguments - The arguments to pass in the query string.
 * @returns The built request information.
 */
export declare const baseProductListingRequest: (req: ProductListingsParam, method: HttpMethods, contentType: HTTPContentType, queryStringArguments?: Record<string, string>) => Pick<PlatformClientCallOptions, 'accessToken' | 'method' | 'contentType' | 'url'>;
