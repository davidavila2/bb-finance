import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, TsheetsExtractsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { TsheetsExtract } from '@bba/api-interfaces';

import { TsheetsExtractDetailsComponent } from './tsheets-extract-details/tsheets-extract-details.component';
import { TsheetsExtractsListComponent } from './tsheets-extracts-list/tsheets-extracts-list.component';
import { TsheetsExtractsComponent } from './tsheets-extracts.component';

import { mockTsheetsExtract, mockEmptyTsheetsExtract } from '@bba/testing';

describe('TsheetsExtractsComponent', () => {
  let component: TsheetsExtractsComponent;
  let fixture: ComponentFixture<TsheetsExtractsComponent>;
  let de: DebugElement;
  let tsheetsExtractsFacade: TsheetsExtractsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TsheetsExtractsComponent,
        TsheetsExtractDetailsComponent,
        TsheetsExtractsListComponent,
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
    fixture = TestBed.createComponent(TsheetsExtractsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    tsheetsExtractsFacade = TestBed.inject(TsheetsExtractsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call tsheetsExtractsFacade selectTsheetsExtract', () => {
    const spy = jest.spyOn(tsheetsExtractsFacade, 'selectTsheetsExtract');

    component.selectTsheetsExtract(mockTsheetsExtract);

    expect(spy).toHaveBeenCalledWith(mockTsheetsExtract.id);
  });

  describe('should on save call tsheetsExtractsFacade', () => {
    it('updateTsheetsExtract', () => {
      const spy = jest.spyOn(tsheetsExtractsFacade, 'updateTsheetsExtract');

      component.saveTsheetsExtract(mockTsheetsExtract);

      expect(spy).toHaveBeenCalledWith(mockTsheetsExtract);
    });

    it('createTsheetsExtract', () => {
      const spy = jest.spyOn(tsheetsExtractsFacade, 'createTsheetsExtract');

      component.saveTsheetsExtract(mockEmptyTsheetsExtract);

      expect(spy).toHaveBeenCalledWith(mockEmptyTsheetsExtract);
    });
  });

  it('should on delete call tsheetsExtractsFacade deleteTsheetsExtract', () => {
    const spy = jest.spyOn(tsheetsExtractsFacade, 'deleteTsheetsExtract');

    component.deleteTsheetsExtract(mockTsheetsExtract);

    expect(spy).toHaveBeenCalledWith(mockTsheetsExtract);
  });
});
