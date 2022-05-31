import { QuestionAnswerDocumentIdentifier } from '../../api/search/search/question-answering';
export interface QuestionAnsweringRelatedQuestionState extends QuestionAnswerDocumentIdentifier {
    expanded: boolean;
}
export interface QuestionAnsweringState {
    /**
     * Determines if the snippet is liked, or upvoted by the end user.
     */
    liked: boolean;
    /**
     * Determines if the snippet is disliked, or downvoted by the end user.
     */
    disliked: boolean;
    /**
     * Determines if the snippet is expanded.
     */
    expanded: boolean;
    /**
     * Determines if the feedback modal with the purpose of explaining why the end user disliked the snippet is currently opened.
     */
    feedbackModalOpen: boolean;
    /**
     * The unique identifier for this question & answer.
     */
    questionAnswerId?: string;
    relatedQuestions: QuestionAnsweringRelatedQuestionState[];
}
export declare const getQuestionAnsweringInitialState: () => QuestionAnsweringState;