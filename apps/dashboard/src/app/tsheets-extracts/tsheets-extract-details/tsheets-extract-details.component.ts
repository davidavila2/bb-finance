import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TsheetsExtract } from '@bba/api-interfaces';

@Component({
  selector: 'bba-tsheets-extract-details',
  templateUrl: './tsheets-extract-details.component.html',
  styleUrls: ['./tsheets-extract-details.component.scss'],
})
export class TsheetsExtractDetailsComponent {
  currentTsheetsExtract: TsheetsExtract;
  originalTitle = '';
  @Input() set tsheetsExtract(value: TsheetsExtract) {
    if (value) this.originalTitle = value.title;
    this.currentTsheetsExtract = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
