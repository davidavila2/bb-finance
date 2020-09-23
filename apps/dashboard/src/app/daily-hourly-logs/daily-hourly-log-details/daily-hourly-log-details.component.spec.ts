import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { DailyHourlyLog } from '@bba/api-interfaces';

import { DailyHourlyLogDetailsComponent } from './daily-hourly-log-details.component';

import { mockDailyHourlyLog } from '@bba/testing';

describe('DailyHourlyLogDetailsComponent', () => {
  let component: DailyHourlyLogDetailsComponent;
  let fixture: ComponentFixture<DailyHourlyLogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DailyHourlyLogDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHourlyLogDetailsComponent);
    component = fixture.componentInstance;
    component.dailyHourlyLog = mockDailyHourlyLog;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
