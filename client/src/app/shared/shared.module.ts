import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from '../components/customer/customer.component';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [ CustomerComponent ],
 exports:      [ CustomerComponent, CommonModule, FormsModule ]
})
export class SharedModule { }