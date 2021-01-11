import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  constructor(
    private customerService : CustomerService
  ) {}

  customer = {
    name: '',
    phone: '',
    orderDate: new Date(),
    deliveryDate: ''
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

}
