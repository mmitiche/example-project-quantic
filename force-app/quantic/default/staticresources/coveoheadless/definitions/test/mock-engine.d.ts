import { AnyAction, ActionCreatorWithPreparedPayload } from '@reduxjs/toolkit';
import { SearchAppState } from '../state/search-app-state';
import { RecommendationAppState } from '../state/recommendation-app-state';
import { ProductRecommendationsAppState } from '../state/product-recommendations-app-state';
import { SearchEngine } from '../app/search-engine/search-engine';
import { RecommendationEngine } from '../app/recommendation-engine/recommendation-engine';
import { ProductRecommendationEngine } from '../app/product-recommendation-engine/product-recommendation-engine';
import { ProductListingEngine } from '../app/product-listing-engine/product-listing-engine';
import { ProductListingAppState } from '../state/product-listing-app-state';
import { CaseAssistAppState } from '../state/case-assist-app-state';
import { CaseAssistEngine } from '../case-assist.index';
declare type AsyncActionCreator<ThunkArg> = ActionCreatorWithPreparedPayload<[
    string,
    ThunkArg
], undefined, string, never, {
    arg: ThunkArg;
    requestId: string;
}>;
interface MockEngine {
    actions: AnyAction[];
    findAsyncAction: <ThunkArg>(action: AsyncActionCreator<ThunkArg>) => ReturnType<AsyncActionCreator<ThunkArg>> | undefined;
}
export interface MockSearchEngine extends SearchEngine<SearchAppState>, MockEngine {
}
/**
 * For internal use only.
 *
 * Returns a non-functionnal `SearchEngine`.
 * To be used only for unit testing controllers, not for functionnal tests.
 */
export declare function buildMockSearchAppEngine(config?: Partial<SearchEngine<SearchAppState>>): MockSearchEngine;
export interface MockRecommendationEngine extends RecommendationEngine, MockEngine {
}
/**
 * For internal use only.
 *
 * Returns a non-functionnal `RecommendationEngine`.
 * To be used only for unit testing controllers, not for functionnal tests.
 */
export declare function buildMockRecommendationAppEngine(config?: Partial<RecommendationEngine<RecommendationAppState>>): MockRecommendationEngine;
export interface MockProductRecommendationEngine extends ProductRecommendationEngine, MockEngine {
}
/**
 * For internal use only.
 *
 * Returns a non-functionnal `ProductRecommendationEngine`.
 * To be used only for unit testing controllers, not for functionnal tests.
 */
export declare function buildMockProductRecommendationsAppEngine(config?: Partial<ProductRecommendationEngine<ProductRecommendationsAppState>>): MockProductRecommendationEngine;
export interface MockProductListingEngine extends ProductListingEngine<ProductListingAppState>, MockEngine {
}
/**
 * For internal use only.
 *
 * Returns a non-functionnal `ProductListingEngine`.
 * To be used only for unit testing controllers, not for functionnal tests.
 */
export declare function buildMockProductListingEngine(config?: Partial<ProductListingEngine<ProductListingAppState>>): MockProductListingEngine;
export interface MockCaseAssistEngine extends CaseAssistEngine<CaseAssistAppState>, MockEngine {
}
/**
 * For internal use only.
 *
 * Returns a non-functionnal `CaseAssistEngine`.
 * To be used only for unit testing controllers, not for functionnal tests.
 */
export declare function buildMockCaseAssistEngine(config?: Partial<CaseAssistEngine<CaseAssistAppState>>): MockCaseAssistEngine;
export {};
