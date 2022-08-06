import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service"

@Component({
  selector: 'app-apirest-show',
  templateUrl: './apirest-show.component.html',
  styleUrls: ['./apirest-show.component.scss']
})
export class APIRestShowComponent implements OnInit {
  load:boolean=false;
  vehiculos:Car[]=[];
  showDescription:boolean=false;
  toggleDescription(){
    this.showDescription=!this.showDescription
  }
    constructor(
      private vehicles:ProductsService
    ) {
  }

    ngOnInit(): void {
      this.vehicles.getAllProducts()
      .subscribe(data=>{this.vehiculos=data});
      console.log(this.vehiculos)

    }

}
export interface Car {
  id:number;
  title:string;
  price:number;
  images:string[];
  description:string;
  category:string;

}
