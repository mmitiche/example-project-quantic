import { ConfigurationSection, ContextSection, DictionaryFieldContextSection, ProductRecommendationsSection, SearchHubSection, VersionSection } from './state-sections';
export declare type ProductRecommendationsAppState = ConfigurationSection & ProductRecommendationsSection & ContextSection & DictionaryFieldContextSection & SearchHubSection & VersionSection;
