import { FacetValue } from './interfaces/response';
import { ConfigurationSection, FacetSection } from '../../../state/state-sections';
import { AsyncThunkOptions } from '../../../app/async-thunk-options';
export declare const executeToggleFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
    selection: FacetValue;
}, AsyncThunkOptions<FacetSection & ConfigurationSection, import("../../../app/thunk-extra-arguments").ThunkExtraArguments>>;
