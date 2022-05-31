export declare type TestedRegion = 'us' | 'au' | 'eu';
export declare type TestedEnvironment = 'dev' | 'qa' | 'prod' | 'hipaa';
export interface TestedPlatformURL {
    region?: TestedRegion;
    environment?: TestedEnvironment;
    platform: string;
    search: string;
    analytics: string;
}
export declare const allValidPlatformCombination: () => TestedPlatformURL[];
