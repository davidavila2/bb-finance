import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';

import { ClientsEffects } from './clients/clients.effects';
import { DailyHourlyLogsEffects } from './daily-hourly-logs/daily-hourly-logs.effects';
import { HolidaysEffects } from './holidays/holidays.effects';
import { ProjectsEffects } from './projects/projects.effects';
import { ProjectResourcesEffects } from './project-resources/project-resources.effects';
import { PtoRequestsEffects } from './pto-requests/pto-requests.effects';
import { ResourcesEffects } from './resources/resources.effects';
import { ResourceRatesEffects } from './resource-rates/resource-rates.effects';
import { TsheetsExtractsEffects } from './tsheets-extracts/tsheets-extracts.effects';

const STORE_NAME = 'bba-store';
const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      ClientsEffects,
      DailyHourlyLogsEffects,
      HolidaysEffects,
      ProjectsEffects,
      ProjectResourcesEffects,
      PtoRequestsEffects,
      ResourcesEffects,
      ResourceRatesEffects,
      TsheetsExtractsEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
})
export class CoreStateModule {}
