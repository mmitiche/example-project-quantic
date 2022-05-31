import { QuestionAnsweringDocumentIdActionCreatorPayload } from './question-answering-document-id';
export declare const expandSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/expand">;
export declare const collapseSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/collapse">;
export declare const likeSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/like">;
export declare const dislikeSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/dislike">;
export declare const openFeedbackModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/feedbackModal/open">;
export declare const closeFeedbackModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/feedbackModal/close">;
export declare const expandSmartSnippetRelatedQuestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: QuestionAnsweringDocumentIdActionCreatorPayload], unknown, "smartSnippet/related/expand", never, never>;
export declare const collapseSmartSnippetRelatedQuestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: QuestionAnsweringDocumentIdActionCreatorPayload], unknown, "smartSnippet/related/collapse", never, never>;
