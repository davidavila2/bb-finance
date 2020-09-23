import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ResourceRatesFacade } from './resource-rates.facade';
import * as ResourceRatesActions from './resource-rates.actions';
import { initialResourceRatesState } from './resource-rates.reducer';

import { mockResourceRate } from '@bba/testing';

describe('ResourceRatesFacade', () => {
  let facade: ResourceRatesFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourceRatesFacade,
        provideMockStore({ initialState: initialResourceRatesState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(ResourceRatesFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = ResourceRatesActions.createResourceRate({
      resourceRate: mockResourceRate,
    });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(resourceRate.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectResourceRate(mockResourceRate.id);

      const action = ResourceRatesActions.selectResourceRate({
        selectedId: mockResourceRate.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadResourceRates on loadResourceRates()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadResourceRates();

      const action = ResourceRatesActions.loadResourceRates();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadResourceRate on loadResourceRate(resourceRate.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadResourceRate(mockResourceRate.id);

      const action = ResourceRatesActions.loadResourceRate({
        resourceRateId: mockResourceRate.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createResourceRate on createResourceRate(resourceRate)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createResourceRate(mockResourceRate);

      const action = ResourceRatesActions.createResourceRate({
        resourceRate: mockResourceRate,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateResourceRate on updateResourceRate(resourceRate)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateResourceRate(mockResourceRate);

      const action = ResourceRatesActions.updateResourceRate({
        resourceRate: mockResourceRate,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteResourceRate(mockResourceRate);

      const action = ResourceRatesActions.deleteResourceRate({
        resourceRate: mockResourceRate,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
