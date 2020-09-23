import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Client } from '@bba/api-interfaces';

@Component({
  selector: 'bba-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent {
  currentClient: Client;
  originalTitle = '';
  @Input() set client(value: Client) {
    if (value) this.originalTitle = value.title;
    this.currentClient = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
