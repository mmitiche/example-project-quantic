import { SearchEngine } from '../../../app/search-engine/search-engine';
import { FacetSearch } from '../../core/facets/facet-search/specific/headless-facet-search';
import { FacetOptions } from '../../facets/facet/headless-facet-options';
import { Subscribable } from '../../controller/headless-controller';
/**
 * The `FieldSuggestions` controller provides query suggestions based on a particular facet field.
 *
 * For example, you could use this controller to provide auto-completion suggestions while the end user is typing an item title.
 *
 * This controller is a wrapper around the basic facet controller search functionality, and thus exposes similar options and properties.
 */
export interface FieldSuggestions extends FacetSearch, Subscribable {
}
export interface FieldSuggestionsOptions extends FacetOptions {
}
export interface FieldSuggestionsProps {
    /**
     * The options for the `FieldSuggestions` controller.
     * */
    options: FieldSuggestionsOptions;
}
/**
 * Creates a `FieldSuggestions` controller instance.
 * @param engine The headless engine.
 * @param props The configurable `FieldSuggestions` controller properties.
 * @returns A `FieldSuggestions` controller instance.
 */
export declare function buildFieldSuggestions(engine: SearchEngine, props: FieldSuggestionsProps): FieldSuggestions;
