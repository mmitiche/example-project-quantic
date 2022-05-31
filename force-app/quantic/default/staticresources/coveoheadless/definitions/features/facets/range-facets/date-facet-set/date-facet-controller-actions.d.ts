import { DateFacetValue } from './interfaces/response';
import { ConfigurationSection, DateFacetSection } from '../../../../state/state-sections';
import { AsyncThunkOptions } from '../../../../app/async-thunk-options';
export declare const executeToggleDateFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
    selection: DateFacetValue;
}, AsyncThunkOptions<ConfigurationSection & DateFacetSection, import("../../../../app/thunk-extra-arguments").ThunkExtraArguments>>;
