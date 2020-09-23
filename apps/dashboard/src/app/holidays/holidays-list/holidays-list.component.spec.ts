import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';

import { HolidaysListComponent } from './holidays-list.component';

describe('HolidaysListComponent', () => {
  let component: HolidaysListComponent;
  let fixture: ComponentFixture<HolidaysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HolidaysListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
