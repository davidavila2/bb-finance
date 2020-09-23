import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule } from '@bba/core-state';
import { MaterialModule } from '@bba/material';

import { ClientsListComponent } from '../clients/clients-list/clients-list.component';
import { DailyHourlyLogsListComponent } from '../daily-hourly-logs/daily-hourly-logs-list/daily-hourly-logs-list.component';
import { HolidaysListComponent } from '../holidays/holidays-list/holidays-list.component';
import { ProjectsListComponent } from '../projects/projects-list/projects-list.component';
import { ProjectResourcesListComponent } from '../project-resources/project-resources-list/project-resources-list.component';
import { PtoRequestsListComponent } from '../pto-requests/pto-requests-list/pto-requests-list.component';
import { ResourcesListComponent } from '../resources/resources-list/resources-list.component';
import { ResourceRatesListComponent } from '../resource-rates/resource-rates-list/resource-rates-list.component';
import { TsheetsExtractsListComponent } from '../tsheets-extracts/tsheets-extracts-list/tsheets-extracts-list.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ClientsListComponent,
        DailyHourlyLogsListComponent,
        HolidaysListComponent,
        ProjectsListComponent,
        ProjectResourcesListComponent,
        PtoRequestsListComponent,
        ResourcesListComponent,
        ResourceRatesListComponent,
        TsheetsExtractsListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
