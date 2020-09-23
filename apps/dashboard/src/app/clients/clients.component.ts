import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '@bba/api-interfaces';
import { ClientsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]> = this.clientsFacade.allClients$;
  selectedClient$: Observable<Client> = this.clientsFacade.selectedClient$;

  constructor(private clientsFacade: ClientsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.clientsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadClients();
    this.clientsFacade.selectClient(null);
  }

  selectClient(client: Client) {
    this.clientsFacade.selectClient(client.id);
  }

  loadClients() {
    this.clientsFacade.loadClients();
  }

  saveClient(client: Client) {
    if (client.id) {
      this.clientsFacade.updateClient(client);
    } else {
      this.clientsFacade.createClient(client);
    }
  }

  deleteClient(client: Client) {
    this.clientsFacade.deleteClient(client);
  }
}
