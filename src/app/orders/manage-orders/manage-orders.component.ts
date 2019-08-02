import { Component, OnInit } from '@angular/core';
import { ManageOrdersService } from '../manage-orders.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  pageTitle:any="Order Hub";
  products:any=[];

  constructor(private _orderService:ManageOrdersService) { }

  ngOnInit() {
    this._orderService.getData().subscribe((data)=>{
      this.products=data;
    })
  }

}
