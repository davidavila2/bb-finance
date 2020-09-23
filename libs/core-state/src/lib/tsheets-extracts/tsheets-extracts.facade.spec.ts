import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TsheetsExtractsFacade } from './tsheets-extracts.facade';
import * as TsheetsExtractsActions from './tsheets-extracts.actions';
import { initialTsheetsExtractsState } from './tsheets-extracts.reducer';

import { mockTsheetsExtract } from '@bba/testing';

describe('TsheetsExtractsFacade', () => {
  let facade: TsheetsExtractsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TsheetsExtractsFacade,
        provideMockStore({ initialState: initialTsheetsExtractsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(TsheetsExtractsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = TsheetsExtractsActions.createTsheetsExtract({
      tsheetsExtract: mockTsheetsExtract,
    });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(tsheetsExtract.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectTsheetsExtract(mockTsheetsExtract.id);

      const action = TsheetsExtractsActions.selectTsheetsExtract({
        selectedId: mockTsheetsExtract.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadTsheetsExtracts on loadTsheetsExtracts()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadTsheetsExtracts();

      const action = TsheetsExtractsActions.loadTsheetsExtracts();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadTsheetsExtract on loadTsheetsExtract(tsheetsExtract.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadTsheetsExtract(mockTsheetsExtract.id);

      const action = TsheetsExtractsActions.loadTsheetsExtract({
        tsheetsExtractId: mockTsheetsExtract.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createTsheetsExtract on createTsheetsExtract(tsheetsExtract)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createTsheetsExtract(mockTsheetsExtract);

      const action = TsheetsExtractsActions.createTsheetsExtract({
        tsheetsExtract: mockTsheetsExtract,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateTsheetsExtract on updateTsheetsExtract(tsheetsExtract)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateTsheetsExtract(mockTsheetsExtract);

      const action = TsheetsExtractsActions.updateTsheetsExtract({
        tsheetsExtract: mockTsheetsExtract,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteTsheetsExtract(mockTsheetsExtract);

      const action = TsheetsExtractsActions.deleteTsheetsExtract({
        tsheetsExtract: mockTsheetsExtract,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
