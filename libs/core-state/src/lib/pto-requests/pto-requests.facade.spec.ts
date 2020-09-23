import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { PtoRequestsFacade } from './pto-requests.facade';
import * as PtoRequestsActions from './pto-requests.actions';
import { initialPtoRequestsState } from './pto-requests.reducer';

import { mockPtoRequest } from '@bba/testing';

describe('PtoRequestsFacade', () => {
  let facade: PtoRequestsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PtoRequestsFacade,
        provideMockStore({ initialState: initialPtoRequestsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(PtoRequestsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = PtoRequestsActions.createPtoRequest({
      ptoRequest: mockPtoRequest,
    });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(ptoRequest.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectPtoRequest(mockPtoRequest.id);

      const action = PtoRequestsActions.selectPtoRequest({
        selectedId: mockPtoRequest.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadPtoRequests on loadPtoRequests()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadPtoRequests();

      const action = PtoRequestsActions.loadPtoRequests();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadPtoRequest on loadPtoRequest(ptoRequest.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadPtoRequest(mockPtoRequest.id);

      const action = PtoRequestsActions.loadPtoRequest({
        ptoRequestId: mockPtoRequest.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createPtoRequest on createPtoRequest(ptoRequest)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createPtoRequest(mockPtoRequest);

      const action = PtoRequestsActions.createPtoRequest({
        ptoRequest: mockPtoRequest,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updatePtoRequest on updatePtoRequest(ptoRequest)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updatePtoRequest(mockPtoRequest);

      const action = PtoRequestsActions.updatePtoRequest({
        ptoRequest: mockPtoRequest,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deletePtoRequest(mockPtoRequest);

      const action = PtoRequestsActions.deletePtoRequest({
        ptoRequest: mockPtoRequest,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
