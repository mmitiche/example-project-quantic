import { Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
declare const optionsSchema: Schema<{
    additionalFields: string[] | null | undefined;
    skus: string[] | null | undefined;
    maxNumberOfRecommendations: number;
}>;
export declare type FrequentlyViewedDifferentCategoryListOptions = SchemaValues<typeof optionsSchema>;
export interface FrequentlyViewedDifferentCategoryListProps {
    options?: FrequentlyViewedDifferentCategoryListOptions;
}
export declare type FrequentlyViewedDifferentCategoryList = ReturnType<typeof buildFrequentlyViewedDifferentCategoryList>;
export declare type FrequentlyViewedDifferentCategoryListState = FrequentlyViewedDifferentCategoryList['state'];
export declare const buildFrequentlyViewedDifferentCategoryList: (engine: ProductRecommendationEngine, props: FrequentlyViewedDifferentCategoryListProps) => {
    setSkus(skus: string[]): void;
    refresh(): void;
    state: {
        skus: string[];
        maxNumberOfRecommendations: number;
        recommendations: import("./headless-cart-recommendations").ProductRecommendation[];
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        isLoading: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
