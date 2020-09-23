import { Injectable } from '@angular/core';
import { Client } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as ClientsActions from './clients.actions';
import * as ClientsSelectors from './clients.selectors';
import * as fromClients from './clients.reducer';

@Injectable({
  providedIn: 'root',
})
export class ClientsFacade {
  loaded$ = this.store.pipe(select(ClientsSelectors.getClientsLoaded));
  allClients$ = this.store.pipe(select(ClientsSelectors.getAllClients));
  selectedClient$ = this.store.pipe(select(ClientsSelectors.getSelectedClient));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === ClientsActions.createClient({} as any).type ||
        action.type === ClientsActions.updateClient({} as any).type ||
        action.type === ClientsActions.deleteClient({} as any).type
    )
  );

  constructor(
    private store: Store<fromClients.ClientsPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectClient(selectedId: string) {
    this.dispatch(ClientsActions.selectClient({ selectedId }));
  }

  loadClients() {
    this.dispatch(ClientsActions.loadClients());
  }

  loadClient(clientId: string) {
    this.dispatch(ClientsActions.loadClient({ clientId }));
  }

  createClient(client: Client) {
    this.dispatch(ClientsActions.createClient({ client }));
  }

  updateClient(client: Client) {
    this.dispatch(ClientsActions.updateClient({ client }));
  }

  deleteClient(client: Client) {
    this.dispatch(ClientsActions.deleteClient({ client }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
