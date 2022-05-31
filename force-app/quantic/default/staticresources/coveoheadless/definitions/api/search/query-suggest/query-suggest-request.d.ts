import { BaseParam, ContextParam, LocaleParam, VisitorIDParam } from '../../platform-service-params';
import { ActionsHistoryParam, AnalyticsParam, PipelineParam, QueryParam, SearchHubParam, TimezoneParam } from '../search-api-params';
export declare type QuerySuggestRequest = BaseParam & QueryParam & ContextParam & PipelineParam & SearchHubParam & LocaleParam & TimezoneParam & ActionsHistoryParam & VisitorIDParam & AnalyticsParam & {
    count: number;
};
