import { Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
declare const optionsSchema: Schema<{
    additionalFields: string[] | null | undefined;
    skus: string[] | null | undefined;
    maxNumberOfRecommendations: number;
}>;
export declare type FrequentlyViewedSameCategoryListOptions = SchemaValues<typeof optionsSchema>;
export interface FrequentlyViewedSameCategoryListProps {
    options?: FrequentlyViewedSameCategoryListOptions;
}
export declare type FrequentlyViewedSameCategoryList = ReturnType<typeof buildFrequentlyViewedSameCategoryList>;
export declare type FrequentlyViewedSameCategoryListState = FrequentlyViewedSameCategoryList['state'];
export declare const buildFrequentlyViewedSameCategoryList: (engine: ProductRecommendationEngine, props: FrequentlyViewedSameCategoryListProps) => {
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
