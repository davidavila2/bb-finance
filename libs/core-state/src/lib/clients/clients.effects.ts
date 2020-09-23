import { Injectable } from '@angular/core';
import { Client } from '@bba/api-interfaces';
import { ClientsService } from '@bba/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as ClientsActions from './clients.actions';

@Injectable()
export class ClientsEffects {
  @Effect() loadClients$ = this.actions$.pipe(
    ofType(ClientsActions.loadClients),
    fetch({
      run: (action) =>
        this.clientsService
          .all()
          .pipe(
            map((clients: Client[]) =>
              ClientsActions.loadClientsSuccess({ clients })
            )
          ),
      onError: (action, error) => ClientsActions.loadClientsFailure({ error }),
    })
  );

  @Effect() loadClient$ = this.actions$.pipe(
    ofType(ClientsActions.loadClient),
    fetch({
      run: (action) =>
        this.clientsService
          .find(action.clientId)
          .pipe(
            map((client: Client) =>
              ClientsActions.loadClientSuccess({ client })
            )
          ),
      onError: (action, error) => ClientsActions.loadClientFailure({ error }),
    })
  );

  @Effect() createClient$ = this.actions$.pipe(
    ofType(ClientsActions.createClient),
    pessimisticUpdate({
      run: (action) =>
        this.clientsService
          .create(action.client)
          .pipe(
            map((client: Client) =>
              ClientsActions.createClientSuccess({ client })
            )
          ),
      onError: (action, error) => ClientsActions.createClientFailure({ error }),
    })
  );

  @Effect() updateClient$ = this.actions$.pipe(
    ofType(ClientsActions.updateClient),
    pessimisticUpdate({
      run: (action) =>
        this.clientsService
          .update(action.client)
          .pipe(
            map((client: Client) =>
              ClientsActions.updateClientSuccess({ client })
            )
          ),
      onError: (action, error) => ClientsActions.updateClientFailure({ error }),
    })
  );

  @Effect() deleteClient$ = this.actions$.pipe(
    ofType(ClientsActions.deleteClient),
    pessimisticUpdate({
      run: (action) =>
        this.clientsService
          .delete(action.client)
          .pipe(
            map((client: Client) =>
              ClientsActions.deleteClientSuccess({ client })
            )
          ),
      onError: (action, error) => ClientsActions.deleteClientFailure({ error }),
    })
  );

  constructor(
    private actions$: Actions,
    private clientsService: ClientsService
  ) {}
}
