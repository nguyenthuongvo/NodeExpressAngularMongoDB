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
  resultsLength: number = 0;

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer(){
    this.resultsLength = 0;
    this.customerService.findAll().subscribe(res => {
      console.log(res);
      this.dataSource = res;
      this.resultsLength = this.dataSource.length;
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
