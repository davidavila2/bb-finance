import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Application';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/clients', icon: 'view_list', title: 'Clients' },
    {
      path: '/daily-hourly-logs',
      icon: 'view_list',
      title: 'Daily Hourly Logs',
    },
    { path: '/holidays', icon: 'view_list', title: 'Holidays' },
    { path: '/projects', icon: 'view_list', title: 'Projects' },
    {
      path: '/project-resources',
      icon: 'view_list',
      title: 'Project Resources',
    },
    { path: '/pto-requests', icon: 'view_list', title: 'Pto Requests' },
    { path: '/resources', icon: 'view_list', title: 'Resources' },
    { path: '/resource-rates', icon: 'view_list', title: 'Resource Rates' },
    { path: '/tsheets-extracts', icon: 'view_list', title: 'Tsheets Extracts' },
  ];

  isAuthenticated$: Observable<boolean> = of(true);
  sidenavStatus = SidenavStatus.OPENED;

  constructor() {}

  logout() {}

  toggleSidenav() {
    this.sidenavStatus =
      this.sidenavStatus === SidenavStatus.OPENED
        ? SidenavStatus.CLOSED
        : SidenavStatus.OPENED;
  }
}
