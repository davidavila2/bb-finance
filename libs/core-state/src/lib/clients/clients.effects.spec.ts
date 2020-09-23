import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { ClientsEffects } from './clients.effects';
import * as ClientsActions from './clients.actions';
import { ClientsService } from '@bba/core-data';

import { mockClientsService, mockClient } from '@bba/testing';
import { Client } from '@bba/api-interfaces';

describe('ClientsEffects', () => {
  let actions: Observable<any>;
  let effects: ClientsEffects;
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ClientsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: ClientsService, useValue: mockClientsService },
      ],
    });

    effects = TestBed.inject(ClientsEffects);
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadClients$', () => {
    it('should return loadClientsSuccess, on success', () => {
      const clients: Client[] = [];
      const action = ClientsActions.loadClients();
      const outcome = ClientsActions.loadClientsSuccess({ clients });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: clients });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadClients$).toBeObservable(expected);
    });

    it('should return loadClientsFailure, on failure', () => {
      const action = ClientsActions.loadClients();
      const error = new Error();
      const outcome = ClientsActions.loadClientsFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadClients$).toBeObservable(expected);
    });
  });

  describe('loadClient$', () => {
    it('should return success with client', () => {
      const client = { ...mockClient };
      const action = ClientsActions.loadClient({ clientId: client.id });
      const outcome = ClientsActions.loadClientSuccess({ client });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: client });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadClient$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const client = { ...mockClient };
      const action = ClientsActions.loadClient({ clientId: client.id });
      const error = new Error();
      const outcome = ClientsActions.loadClientFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadClient$).toBeObservable(expected);
    });
  });

  describe('createClient$', () => {
    it('should return success with client', () => {
      const client = { ...mockClient };
      const action = ClientsActions.createClient({ client });
      const outcome = ClientsActions.createClientSuccess({ client });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: client });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createClient$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const client = { ...mockClient };
      const action = ClientsActions.createClient({ client });
      const error = new Error();
      const outcome = ClientsActions.createClientFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createClient$).toBeObservable(expected);
    });
  });

  describe('updateClient$', () => {
    it('should return success with client', () => {
      const client = { ...mockClient };
      const action = ClientsActions.updateClient({ client });
      const outcome = ClientsActions.updateClientSuccess({ client });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: client });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateClient$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const client = { ...mockClient };
      const action = ClientsActions.updateClient({ client });
      const error = new Error();
      const outcome = ClientsActions.updateClientFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateClient$).toBeObservable(expected);
    });
  });

  describe('deleteClient$', () => {
    it('should return success with client', () => {
      const client = { ...mockClient };
      const action = ClientsActions.deleteClient({ client });
      const outcome = ClientsActions.deleteClientSuccess({ client });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: client });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteClient$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const client = { ...mockClient };
      const action = ClientsActions.deleteClient({ client });
      const error = new Error();
      const outcome = ClientsActions.deleteClientFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteClient$).toBeObservable(expected);
    });
  });
});
