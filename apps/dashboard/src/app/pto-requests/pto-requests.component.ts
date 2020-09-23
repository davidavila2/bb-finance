import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PtoRequest } from '@bba/api-interfaces';
import { PtoRequestsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-pto-requests',
  templateUrl: './pto-requests.component.html',
  styleUrls: ['./pto-requests.component.scss'],
})
export class PtoRequestsComponent implements OnInit {
  ptoRequests$: Observable<PtoRequest[]> = this.ptoRequestsFacade
    .allPtoRequests$;
  selectedPtoRequest$: Observable<PtoRequest> = this.ptoRequestsFacade
    .selectedPtoRequest$;

  constructor(private ptoRequestsFacade: PtoRequestsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.ptoRequestsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadPtoRequests();
    this.ptoRequestsFacade.selectPtoRequest(null);
  }

  selectPtoRequest(ptoRequest: PtoRequest) {
    this.ptoRequestsFacade.selectPtoRequest(ptoRequest.id);
  }

  loadPtoRequests() {
    this.ptoRequestsFacade.loadPtoRequests();
  }

  savePtoRequest(ptoRequest: PtoRequest) {
    if (ptoRequest.id) {
      this.ptoRequestsFacade.updatePtoRequest(ptoRequest);
    } else {
      this.ptoRequestsFacade.createPtoRequest(ptoRequest);
    }
  }

  deletePtoRequest(ptoRequest: PtoRequest) {
    this.ptoRequestsFacade.deletePtoRequest(ptoRequest);
  }
}
