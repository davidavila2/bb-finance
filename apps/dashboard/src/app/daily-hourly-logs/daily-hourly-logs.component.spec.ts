import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, DailyHourlyLogsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { DailyHourlyLog } from '@bba/api-interfaces';

import { DailyHourlyLogDetailsComponent } from './daily-hourly-log-details/daily-hourly-log-details.component';
import { DailyHourlyLogsListComponent } from './daily-hourly-logs-list/daily-hourly-logs-list.component';
import { DailyHourlyLogsComponent } from './daily-hourly-logs.component';

import { mockDailyHourlyLog, mockEmptyDailyHourlyLog } from '@bba/testing';

describe('DailyHourlyLogsComponent', () => {
  let component: DailyHourlyLogsComponent;
  let fixture: ComponentFixture<DailyHourlyLogsComponent>;
  let de: DebugElement;
  let dailyHourlyLogsFacade: DailyHourlyLogsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DailyHourlyLogsComponent,
        DailyHourlyLogDetailsComponent,
        DailyHourlyLogsListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHourlyLogsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    dailyHourlyLogsFacade = TestBed.inject(DailyHourlyLogsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call dailyHourlyLogsFacade selectDailyHourlyLog', () => {
    const spy = jest.spyOn(dailyHourlyLogsFacade, 'selectDailyHourlyLog');

    component.selectDailyHourlyLog(mockDailyHourlyLog);

    expect(spy).toHaveBeenCalledWith(mockDailyHourlyLog.id);
  });

  describe('should on save call dailyHourlyLogsFacade', () => {
    it('updateDailyHourlyLog', () => {
      const spy = jest.spyOn(dailyHourlyLogsFacade, 'updateDailyHourlyLog');

      component.saveDailyHourlyLog(mockDailyHourlyLog);

      expect(spy).toHaveBeenCalledWith(mockDailyHourlyLog);
    });

    it('createDailyHourlyLog', () => {
      const spy = jest.spyOn(dailyHourlyLogsFacade, 'createDailyHourlyLog');

      component.saveDailyHourlyLog(mockEmptyDailyHourlyLog);

      expect(spy).toHaveBeenCalledWith(mockEmptyDailyHourlyLog);
    });
  });

  it('should on delete call dailyHourlyLogsFacade deleteDailyHourlyLog', () => {
    const spy = jest.spyOn(dailyHourlyLogsFacade, 'deleteDailyHourlyLog');

    component.deleteDailyHourlyLog(mockDailyHourlyLog);

    expect(spy).toHaveBeenCalledWith(mockDailyHourlyLog);
  });
});
