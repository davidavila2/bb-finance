import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Client } from '@bba/api-interfaces';

@Component({
  selector: 'bba-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent {
  @Input() clients: Client[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
