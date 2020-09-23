import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { Client } from '@bba/api-interfaces';

import { ClientDetailsComponent } from './client-details.component';

import { mockClient } from '@bba/testing';

describe('ClientDetailsComponent', () => {
  let component: ClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsComponent);
    component = fixture.componentInstance;
    component.client = mockClient;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
