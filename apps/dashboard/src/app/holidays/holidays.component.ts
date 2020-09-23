import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '@bba/api-interfaces';
import { HolidaysFacade } from '@bba/core-state';

@Component({
  selector: 'bba-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent implements OnInit {
  holidays$: Observable<Holiday[]> = this.holidaysFacade.allHolidays$;
  selectedHoliday$: Observable<Holiday> = this.holidaysFacade.selectedHoliday$;

  constructor(private holidaysFacade: HolidaysFacade) {}

  ngOnInit(): void {
    this.reset();
    this.holidaysFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadHolidays();
    this.holidaysFacade.selectHoliday(null);
  }

  selectHoliday(holiday: Holiday) {
    this.holidaysFacade.selectHoliday(holiday.id);
  }

  loadHolidays() {
    this.holidaysFacade.loadHolidays();
  }

  saveHoliday(holiday: Holiday) {
    if (holiday.id) {
      this.holidaysFacade.updateHoliday(holiday);
    } else {
      this.holidaysFacade.createHoliday(holiday);
    }
  }

  deleteHoliday(holiday: Holiday) {
    this.holidaysFacade.deleteHoliday(holiday);
  }
}
