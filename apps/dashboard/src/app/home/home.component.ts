import { Component, OnInit } from '@angular/core';
import {
  Client,
  DailyHourlyLog,
  Holiday,
  Project,
  ProjectResource,
  PtoRequest,
  Resource,
  ResourceRate,
  TsheetsExtract,
} from '@bba/api-interfaces';
import {
  ClientsFacade,
  DailyHourlyLogsFacade,
  HolidaysFacade,
  ProjectsFacade,
  ProjectResourcesFacade,
  PtoRequestsFacade,
  ResourcesFacade,
  ResourceRatesFacade,
  TsheetsExtractsFacade,
} from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clients$: Observable<Client[]> = this.clientsFacade.allClients$;
  dailyHourlyLogs$: Observable<DailyHourlyLog[]> = this.dailyHourlyLogsFacade
    .allDailyHourlyLogs$;
  holidays$: Observable<Holiday[]> = this.holidaysFacade.allHolidays$;
  projects$: Observable<Project[]> = this.projectsFacade.allProjects$;
  projectResources$: Observable<ProjectResource[]> = this.projectResourcesFacade
    .allProjectResources$;
  ptoRequests$: Observable<PtoRequest[]> = this.ptoRequestsFacade
    .allPtoRequests$;
  resources$: Observable<Resource[]> = this.resourcesFacade.allResources$;
  resourceRates$: Observable<ResourceRate[]> = this.resourceRatesFacade
    .allResourceRates$;
  tsheetsExtracts$: Observable<TsheetsExtract[]> = this.tsheetsExtractsFacade
    .allTsheetsExtracts$;

  constructor(
    private clientsFacade: ClientsFacade,
    private dailyHourlyLogsFacade: DailyHourlyLogsFacade,
    private holidaysFacade: HolidaysFacade,
    private projectsFacade: ProjectsFacade,
    private projectResourcesFacade: ProjectResourcesFacade,
    private ptoRequestsFacade: PtoRequestsFacade,
    private resourcesFacade: ResourcesFacade,
    private resourceRatesFacade: ResourceRatesFacade,
    private tsheetsExtractsFacade: TsheetsExtractsFacade
  ) {}

  ngOnInit(): void {
    this.clientsFacade.loadClients();
    this.dailyHourlyLogsFacade.loadDailyHourlyLogs();
    this.holidaysFacade.loadHolidays();
    this.projectsFacade.loadProjects();
    this.projectResourcesFacade.loadProjectResources();
    this.ptoRequestsFacade.loadPtoRequests();
    this.resourcesFacade.loadResources();
    this.resourceRatesFacade.loadResourceRates();
    this.tsheetsExtractsFacade.loadTsheetsExtracts();
  }
}
