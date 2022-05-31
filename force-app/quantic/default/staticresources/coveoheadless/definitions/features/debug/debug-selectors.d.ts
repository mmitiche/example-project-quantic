import { SearchSection } from '../../state/state-sections';
export declare function rankingInformationSelector(state: SearchSection): {
    result: import("../..").Result;
    ranking: {
        documentWeights: import("./ranking-info-parser").DocumentWeights | null;
        termsWeight: import("./ranking-info-parser").TermWeightReport | null;
        totalWeight: number | null;
        qreWeights: import("./ranking-info-parser").QueryRankingExpressionWeights[];
    } | null;
}[];
