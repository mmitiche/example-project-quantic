import { NumericFacetValue } from './interfaces/response';
import { ConfigurationSection, NumericFacetSection } from '../../../../state/state-sections';
import { AsyncThunkOptions } from '../../../../app/async-thunk-options';
export declare const executeToggleNumericFacetSelect: import("@reduxjs/toolkit").AsyncThunk<void, {
    facetId: string;
    selection: NumericFacetValue;
}, AsyncThunkOptions<ConfigurationSection & NumericFacetSection, import("../../../../app/thunk-extra-arguments").ThunkExtraArguments>>;
