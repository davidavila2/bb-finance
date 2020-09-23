import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TsheetsExtract } from '@bba/api-interfaces';
import { TsheetsExtractsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-tsheets-extracts',
  templateUrl: './tsheets-extracts.component.html',
  styleUrls: ['./tsheets-extracts.component.scss'],
})
export class TsheetsExtractsComponent implements OnInit {
  tsheetsExtracts$: Observable<TsheetsExtract[]> = this.tsheetsExtractsFacade
    .allTsheetsExtracts$;
  selectedTsheetsExtract$: Observable<TsheetsExtract> = this
    .tsheetsExtractsFacade.selectedTsheetsExtract$;

  constructor(private tsheetsExtractsFacade: TsheetsExtractsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.tsheetsExtractsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadTsheetsExtracts();
    this.tsheetsExtractsFacade.selectTsheetsExtract(null);
  }

  selectTsheetsExtract(tsheetsExtract: TsheetsExtract) {
    this.tsheetsExtractsFacade.selectTsheetsExtract(tsheetsExtract.id);
  }

  loadTsheetsExtracts() {
    this.tsheetsExtractsFacade.loadTsheetsExtracts();
  }

  saveTsheetsExtract(tsheetsExtract: TsheetsExtract) {
    if (tsheetsExtract.id) {
      this.tsheetsExtractsFacade.updateTsheetsExtract(tsheetsExtract);
    } else {
      this.tsheetsExtractsFacade.createTsheetsExtract(tsheetsExtract);
    }
  }

  deleteTsheetsExtract(tsheetsExtract: TsheetsExtract) {
    this.tsheetsExtractsFacade.deleteTsheetsExtract(tsheetsExtract);
  }
}
