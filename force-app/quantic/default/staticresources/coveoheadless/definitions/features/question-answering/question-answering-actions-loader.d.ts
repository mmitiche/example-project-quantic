import { PayloadAction } from '@reduxjs/toolkit';
import { SearchEngine } from '../../app/search-engine/search-engine';
/**
 * The question answering action creators.
 */
export interface QuestionAnsweringActionCreators {
    /**
     * Collapse a smart snippet
     *
     * @returns A dispatchable action.
     */
    collapseSmartSnippet(): PayloadAction;
    /**
     * Expand a smart snippet
     *
     * @returns A dispatchable action.
     */
    expandSmartSnippet(): PayloadAction;
    /**
     * Dislike, or thumbs down, a smart snippet
     *
     * @returns A dispatchable action.
     */
    dislikeSmartSnippet(): PayloadAction;
    /**
     * Like, or thumbs up, a smart snippet
     *
     * @returns A dispatchable action.
     */
    likeSmartSnippet(): PayloadAction;
    /**
     * Opens the feedback modal of a smart snippet
     *
     * @returns A dispatchable action.
     */
    openFeedbackModal(): PayloadAction;
    /**
     * Closes the feedback modal of a smart snippet
     *
     * @returns A dispatchable action.
     */
    closeFeedbackModal(): PayloadAction;
}
/**
 * Loads the `questionAnswering` reducer and returns possible action creators.
 *
 * @param engine - The headless engine.
 * @returns An object holding the action creators.
 */
export declare function loadQuestionAnsweringActions(engine: SearchEngine): QuestionAnsweringActionCreators;
