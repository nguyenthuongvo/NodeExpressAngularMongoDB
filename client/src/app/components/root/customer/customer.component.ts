import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service'
import { Customer } from 'src/app/models/customer/customer.model'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private customerService : CustomerService
  ) {}

  displayedColumns: string[] = ['name', 'phone', 'orderDate', 'deliveryDate', 'action'];
  dataSource: Customer[] = [];
  customerEdit: Customer = {
    name: '',
    phone: '',
    orderDate: new Date(),
    deliveryDate: new Date()
  };
  
  isEdit = false;

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer(){
    this.customerService.findAll().subscribe(res => {
      console.log(res);
      this.dataSource = res;
    }, err => {
      console.log(err);
    });
  }

  onEditClose(event: boolean) {
    this.isEdit = !event;
    this.loadCustomer();
  }

  editCustomer(customerSelected: Customer){
    this.customerEdit = customerSelected;
    this.isEdit = true;
  }


  showAddNew() {
    this.customerEdit = <Customer>{};
    this.isEdit = true;
  }

}
