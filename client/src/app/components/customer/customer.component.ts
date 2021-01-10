import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service'
import { DatepickerComponent } from 'src/app/shared/date-picker/date-picker.component'

export interface PeriodicElement {
  name: string;
  phone: string;
  orderDate: Date;
  deliveryDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "Nguyen", phone: 'Hydrogen', orderDate: new Date(), deliveryDate: 'H'}
];

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
  dataSource = ELEMENT_DATA;
  
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

  editCustomer(index: number){

    console.log(index);

  }


}
