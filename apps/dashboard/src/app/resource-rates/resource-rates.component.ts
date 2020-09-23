import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceRate } from '@bba/api-interfaces';
import { ResourceRatesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-resource-rates',
  templateUrl: './resource-rates.component.html',
  styleUrls: ['./resource-rates.component.scss'],
})
export class ResourceRatesComponent implements OnInit {
  resourceRates$: Observable<ResourceRate[]> = this.resourceRatesFacade
    .allResourceRates$;
  selectedResourceRate$: Observable<ResourceRate> = this.resourceRatesFacade
    .selectedResourceRate$;

  constructor(private resourceRatesFacade: ResourceRatesFacade) {}

  ngOnInit(): void {
    this.reset();
    this.resourceRatesFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadResourceRates();
    this.resourceRatesFacade.selectResourceRate(null);
  }

  selectResourceRate(resourceRate: ResourceRate) {
    this.resourceRatesFacade.selectResourceRate(resourceRate.id);
  }

  loadResourceRates() {
    this.resourceRatesFacade.loadResourceRates();
  }

  saveResourceRate(resourceRate: ResourceRate) {
    if (resourceRate.id) {
      this.resourceRatesFacade.updateResourceRate(resourceRate);
    } else {
      this.resourceRatesFacade.createResourceRate(resourceRate);
    }
  }

  deleteResourceRate(resourceRate: ResourceRate) {
    this.resourceRatesFacade.deleteResourceRate(resourceRate);
  }
}
