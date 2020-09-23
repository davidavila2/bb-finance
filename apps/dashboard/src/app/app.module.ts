import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { UiLoginModule } from '@bba/ui-login';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { TestingModule } from '@bba/testing';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { DailyHourlyLogsComponent } from './daily-hourly-logs/daily-hourly-logs.component';
import { DailyHourlyLogsListComponent } from './daily-hourly-logs/daily-hourly-logs-list/daily-hourly-logs-list.component';
import { DailyHourlyLogDetailsComponent } from './daily-hourly-logs/daily-hourly-log-details/daily-hourly-log-details.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidaysListComponent } from './holidays/holidays-list/holidays-list.component';
import { HolidayDetailsComponent } from './holidays/holiday-details/holiday-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectResourcesComponent } from './project-resources/project-resources.component';
import { ProjectResourcesListComponent } from './project-resources/project-resources-list/project-resources-list.component';
import { ProjectResourceDetailsComponent } from './project-resources/project-resource-details/project-resource-details.component';
import { PtoRequestsComponent } from './pto-requests/pto-requests.component';
import { PtoRequestsListComponent } from './pto-requests/pto-requests-list/pto-requests-list.component';
import { PtoRequestDetailsComponent } from './pto-requests/pto-request-details/pto-request-details.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesListComponent } from './resources/resources-list/resources-list.component';
import { ResourceDetailsComponent } from './resources/resource-details/resource-details.component';
import { ResourceRatesComponent } from './resource-rates/resource-rates.component';
import { ResourceRatesListComponent } from './resource-rates/resource-rates-list/resource-rates-list.component';
import { ResourceRateDetailsComponent } from './resource-rates/resource-rate-details/resource-rate-details.component';
import { TsheetsExtractsComponent } from './tsheets-extracts/tsheets-extracts.component';
import { TsheetsExtractsListComponent } from './tsheets-extracts/tsheets-extracts-list/tsheets-extracts-list.component';
import { TsheetsExtractDetailsComponent } from './tsheets-extracts/tsheets-extract-details/tsheets-extract-details.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientDetailsComponent,
    DailyHourlyLogsComponent,
    DailyHourlyLogsListComponent,
    DailyHourlyLogDetailsComponent,
    HolidaysComponent,
    HolidaysListComponent,
    HolidayDetailsComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    ProjectResourcesComponent,
    ProjectResourcesListComponent,
    ProjectResourceDetailsComponent,
    PtoRequestsComponent,
    PtoRequestsListComponent,
    PtoRequestDetailsComponent,
    ResourcesComponent,
    ResourcesListComponent,
    ResourceDetailsComponent,
    ResourceRatesComponent,
    ResourceRatesListComponent,
    ResourceRateDetailsComponent,
    TsheetsExtractsComponent,
    TsheetsExtractsListComponent,
    TsheetsExtractDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    TestingModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
