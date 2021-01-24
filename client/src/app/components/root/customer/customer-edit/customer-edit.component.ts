import { Component, OnInit,Output, EventEmitter,  Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service'
import {Customer} from '../../../../models/customer/customer.model'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  constructor(
    private customerService : CustomerService
  ) {}


  _customer: any;
 
  @Input()
  get customer() {
    return this._customer;
  }


  set customer(value: Customer) {
    this._customer = value;
  }


  @Output() onClose = new EventEmitter<boolean>();

  ngOnInit(): void {
    //this.loadCustomer();
  }

  onSave(){
    this.customerService.save(this.customer).subscribe(res => {
      this.onClose.emit(true);
    }, error => {
      console.log(error);
    });
  }

  executeClose() {
    this.onClose.emit(true);
  }

  showValue(value: Date) {
    console.log(value);
  }

}
