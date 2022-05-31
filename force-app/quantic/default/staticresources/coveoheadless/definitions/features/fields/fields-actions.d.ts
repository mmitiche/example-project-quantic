import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection } from '../../state/state-sections';
import { FieldDescription } from '../../api/search/fields/fields-response';
export declare const registerFieldsToInclude: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string[]], string[], "fields/registerFieldsToInclude", never, never>;
export declare const enableFetchAllFields: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"fields/fetchall/enable">;
export declare const disableFetchAllFields: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"fields/fetchall/disable">;
export declare const fetchFieldsDescription: import("@reduxjs/toolkit").AsyncThunk<FieldDescription[], void, AsyncThunkSearchOptions<ConfigurationSection>>;
