import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, HolidaysFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { Holiday } from '@bba/api-interfaces';

import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';
import { HolidaysComponent } from './holidays.component';

import { mockHoliday, mockEmptyHoliday } from '@bba/testing';

describe('HolidaysComponent', () => {
  let component: HolidaysComponent;
  let fixture: ComponentFixture<HolidaysComponent>;
  let de: DebugElement;
  let holidaysFacade: HolidaysFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HolidaysComponent,
        HolidayDetailsComponent,
        HolidaysListComponent,
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
    fixture = TestBed.createComponent(HolidaysComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    holidaysFacade = TestBed.inject(HolidaysFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call holidaysFacade selectHoliday', () => {
    const spy = jest.spyOn(holidaysFacade, 'selectHoliday');

    component.selectHoliday(mockHoliday);

    expect(spy).toHaveBeenCalledWith(mockHoliday.id);
  });

  describe('should on save call holidaysFacade', () => {
    it('updateHoliday', () => {
      const spy = jest.spyOn(holidaysFacade, 'updateHoliday');

      component.saveHoliday(mockHoliday);

      expect(spy).toHaveBeenCalledWith(mockHoliday);
    });

    it('createHoliday', () => {
      const spy = jest.spyOn(holidaysFacade, 'createHoliday');

      component.saveHoliday(mockEmptyHoliday);

      expect(spy).toHaveBeenCalledWith(mockEmptyHoliday);
    });
  });

  it('should on delete call holidaysFacade deleteHoliday', () => {
    const spy = jest.spyOn(holidaysFacade, 'deleteHoliday');

    component.deleteHoliday(mockHoliday);

    expect(spy).toHaveBeenCalledWith(mockHoliday);
  });
});
