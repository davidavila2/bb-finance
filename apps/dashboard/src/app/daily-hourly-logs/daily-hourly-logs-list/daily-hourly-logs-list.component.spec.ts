import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';

import { DailyHourlyLogsListComponent } from './daily-hourly-logs-list.component';

describe('DailyHourlyLogsListComponent', () => {
  let component: DailyHourlyLogsListComponent;
  let fixture: ComponentFixture<DailyHourlyLogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DailyHourlyLogsListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHourlyLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
