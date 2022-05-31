import { SearchAPIErrorWithStatusCode } from '../../api/search/search-api-error-response';
import { ProductRecommendation } from '../../api/search/search/product-recommendation';
export declare type ProductRecommendationsState = {
    id: string;
    skus: string[];
    maxNumberOfRecommendations: number;
    filter: {
        brand: string;
        category: string;
    };
    additionalFields: string[];
    recommendations: ProductRecommendation[];
    error: SearchAPIErrorWithStatusCode | null;
    isLoading: boolean;
    searchUid: string;
    duration: number;
};
export declare const getProductRecommendationsInitialState: () => ProductRecommendationsState;
