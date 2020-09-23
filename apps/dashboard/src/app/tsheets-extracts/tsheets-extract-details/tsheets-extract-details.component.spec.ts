import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { TsheetsExtract } from '@bba/api-interfaces';

import { TsheetsExtractDetailsComponent } from './tsheets-extract-details.component';

import { mockTsheetsExtract } from '@bba/testing';

describe('TsheetsExtractDetailsComponent', () => {
  let component: TsheetsExtractDetailsComponent;
  let fixture: ComponentFixture<TsheetsExtractDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TsheetsExtractDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsheetsExtractDetailsComponent);
    component = fixture.componentInstance;
    component.tsheetsExtract = mockTsheetsExtract;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
