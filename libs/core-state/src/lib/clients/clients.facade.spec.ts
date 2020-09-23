import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ClientsFacade } from './clients.facade';
import * as ClientsActions from './clients.actions';
import { initialClientsState } from './clients.reducer';

import { mockClient } from '@bba/testing';

describe('ClientsFacade', () => {
  let facade: ClientsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientsFacade,
        provideMockStore({ initialState: initialClientsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(ClientsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = ClientsActions.createClient({ client: mockClient });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(client.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectClient(mockClient.id);

      const action = ClientsActions.selectClient({ selectedId: mockClient.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadClients on loadClients()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadClients();

      const action = ClientsActions.loadClients();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadClient on loadClient(client.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadClient(mockClient.id);

      const action = ClientsActions.loadClient({ clientId: mockClient.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createClient on createClient(client)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createClient(mockClient);

      const action = ClientsActions.createClient({ client: mockClient });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateClient on updateClient(client)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateClient(mockClient);

      const action = ClientsActions.updateClient({ client: mockClient });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteClient(mockClient);

      const action = ClientsActions.deleteClient({ client: mockClient });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
