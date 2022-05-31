import { CaseAssistAppState } from '../../state/case-assist-app-state';
export declare enum KnownCaseFields {
    id = "id",
    subject = "subject",
    description = "description",
    category = "category",
    productId = "productId"
}
export declare const caseAssistCaseSelector: (state: Partial<CaseAssistAppState>) => {
    id: string | undefined;
    subject: string | undefined;
    description: string | undefined;
    category: string | undefined;
    productId: string | undefined;
    custom: {};
};
export declare const caseAssistCaseInputValueSelector: (state: Partial<CaseAssistAppState>, fieldName: string) => string | undefined;
export declare const caseAssistCustomCaseInputValuesSelector: (state: Partial<CaseAssistAppState>) => {};
export declare const caseAssistCaseFieldValueSelector: (state: Partial<CaseAssistAppState>, fieldName: string) => string | undefined;
export declare const caseAssistCustomCaseFieldValuesSelector: (state: Partial<CaseAssistAppState>) => {};
export declare const caseAssistCaseClassificationSelector: (state: Partial<CaseAssistAppState>, classificationId: string, autoSelection?: boolean) => {
    classificationId: string;
    responseId: string;
    fieldName: string;
    classification: {
        value: string;
        confidence: number;
    };
} | {
    autoSelection: true;
    classificationId: string;
    responseId: string;
    fieldName: string;
    classification: {
        value: string;
        confidence: number;
    };
};
export declare const caseAssistDocumentSuggestionSelector: (state: Partial<CaseAssistAppState>, suggestionId: string, fromQuickview?: boolean, openDocument?: boolean) => {
    suggestionId: string;
    responseId: string;
    suggestion: {
        documentUri: string;
        documentUriHash: string;
        documentTitle: string;
        documentUrl: string;
        documentPosition: number;
    };
} | {
    fromQuickview: true;
    suggestionId: string;
    responseId: string;
    suggestion: {
        documentUri: string;
        documentUriHash: string;
        documentTitle: string;
        documentUrl: string;
        documentPosition: number;
    };
} | {
    openDocument: true;
    suggestionId: string;
    responseId: string;
    suggestion: {
        documentUri: string;
        documentUriHash: string;
        documentTitle: string;
        documentUrl: string;
        documentPosition: number;
    };
};
