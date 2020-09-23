import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { Holiday } from '@bba/api-interfaces';

import { HolidayDetailsComponent } from './holiday-details.component';

import { mockHoliday } from '@bba/testing';

describe('HolidayDetailsComponent', () => {
  let component: HolidayDetailsComponent;
  let fixture: ComponentFixture<HolidayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayDetailsComponent);
    component = fixture.componentInstance;
    component.holiday = mockHoliday;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
