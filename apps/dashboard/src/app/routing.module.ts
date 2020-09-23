import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@bba/ui-login';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { DailyHourlyLogsComponent } from './daily-hourly-logs/daily-hourly-logs.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectResourcesComponent } from './project-resources/project-resources.component';
import { PtoRequestsComponent } from './pto-requests/pto-requests.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceRatesComponent } from './resource-rates/resource-rates.component';
import { TsheetsExtractsComponent } from './tsheets-extracts/tsheets-extracts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'daily-hourly-logs', component: DailyHourlyLogsComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-resources', component: ProjectResourcesComponent },
  { path: 'pto-requests', component: PtoRequestsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resource-rates', component: ResourceRatesComponent },
  { path: 'tsheets-extracts', component: TsheetsExtractsComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
