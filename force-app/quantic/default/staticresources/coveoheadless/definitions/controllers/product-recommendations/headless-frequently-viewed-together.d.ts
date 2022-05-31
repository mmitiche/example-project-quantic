import { Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
declare const optionsSchema: Schema<{
    additionalFields: string[] | null | undefined;
    skus: string[] | null | undefined;
    maxNumberOfRecommendations: number;
}>;
export declare type FrequentlyViewedTogetherListOptions = SchemaValues<typeof optionsSchema>;
export interface FrequentlyViewedTogetherListProps {
    options?: FrequentlyViewedTogetherListOptions;
}
export declare type FrequentlyViewedTogetherList = ReturnType<typeof buildFrequentlyViewedTogetherList>;
export declare type FrequentlyViewedTogetherListState = FrequentlyViewedTogetherList['state'];
export declare const buildFrequentlyViewedTogetherList: (engine: ProductRecommendationEngine, props: FrequentlyViewedTogetherListProps) => {
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
