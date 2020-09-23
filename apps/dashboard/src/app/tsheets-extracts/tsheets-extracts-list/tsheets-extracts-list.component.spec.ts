import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';

import { TsheetsExtractsListComponent } from './tsheets-extracts-list.component';

describe('TsheetsExtractsListComponent', () => {
  let component: TsheetsExtractsListComponent;
  let fixture: ComponentFixture<TsheetsExtractsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TsheetsExtractsListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsheetsExtractsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
