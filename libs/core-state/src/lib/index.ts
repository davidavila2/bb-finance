import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromClients from './clients/clients.reducer';
import * as fromDailyHourlyLogs from './daily-hourly-logs/daily-hourly-logs.reducer';
import * as fromHolidays from './holidays/holidays.reducer';
import * as fromProjects from './projects/projects.reducer';
import * as fromProjectResources from './project-resources/project-resources.reducer';
import * as fromPtoRequests from './pto-requests/pto-requests.reducer';
import * as fromResources from './resources/resources.reducer';
import * as fromResourceRates from './resource-rates/resource-rates.reducer';
import * as fromTsheetsExtracts from './tsheets-extracts/tsheets-extracts.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromClients.CLIENTS_FEATURE_KEY]: fromClients.ClientsState;
  [fromDailyHourlyLogs.DAILYHOURLYLOGS_FEATURE_KEY]: fromDailyHourlyLogs.DailyHourlyLogsState;
  [fromHolidays.HOLIDAYS_FEATURE_KEY]: fromHolidays.HolidaysState;
  [fromProjects.PROJECTS_FEATURE_KEY]: fromProjects.ProjectsState;
  [fromProjectResources.PROJECTRESOURCES_FEATURE_KEY]: fromProjectResources.ProjectResourcesState;
  [fromPtoRequests.PTOREQUESTS_FEATURE_KEY]: fromPtoRequests.PtoRequestsState;
  [fromResources.RESOURCES_FEATURE_KEY]: fromResources.ResourcesState;
  [fromResourceRates.RESOURCERATES_FEATURE_KEY]: fromResourceRates.ResourceRatesState;
  [fromTsheetsExtracts.TSHEETSEXTRACTS_FEATURE_KEY]: fromTsheetsExtracts.TsheetsExtractsState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromClients.CLIENTS_FEATURE_KEY]: fromClients.clientsReducer,
  [fromDailyHourlyLogs.DAILYHOURLYLOGS_FEATURE_KEY]:
    fromDailyHourlyLogs.dailyHourlyLogsReducer,
  [fromHolidays.HOLIDAYS_FEATURE_KEY]: fromHolidays.holidaysReducer,
  [fromProjects.PROJECTS_FEATURE_KEY]: fromProjects.projectsReducer,
  [fromProjectResources.PROJECTRESOURCES_FEATURE_KEY]:
    fromProjectResources.projectResourcesReducer,
  [fromPtoRequests.PTOREQUESTS_FEATURE_KEY]: fromPtoRequests.ptoRequestsReducer,
  [fromResources.RESOURCES_FEATURE_KEY]: fromResources.resourcesReducer,
  [fromResourceRates.RESOURCERATES_FEATURE_KEY]:
    fromResourceRates.resourceRatesReducer,
  [fromTsheetsExtracts.TSHEETSEXTRACTS_FEATURE_KEY]:
    fromTsheetsExtracts.tsheetsExtractsReducer,
};
