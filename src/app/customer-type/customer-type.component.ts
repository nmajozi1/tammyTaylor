import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerType } from '../state/actions/journey.action';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  public customerType(customerType: string): void {
    this.store.dispatch(CustomerType({ Type: customerType }));
  }

}
