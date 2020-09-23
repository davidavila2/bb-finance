import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TsheetsExtract } from '@bba/api-interfaces';

@Component({
  selector: 'bba-tsheets-extracts-list',
  templateUrl: './tsheets-extracts-list.component.html',
  styleUrls: ['./tsheets-extracts-list.component.scss'],
})
export class TsheetsExtractsListComponent {
  @Input() tsheetsExtracts: TsheetsExtract[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
