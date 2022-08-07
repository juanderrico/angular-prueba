import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service"

@Component({
  selector: 'app-apirest-show',
  templateUrl: './apirest-show.component.html',
  styleUrls: ['./apirest-show.component.scss']
})
export class APIRestShowComponent implements OnInit {
  load:boolean=false;
  productos:Car[]=[];
  showDescription:boolean=false;
  productDescription:string="";
  productTitle:string="";
  productPrice:number=0;
  productImages:string[]=[];

  hideDescription(){
    this.showDescription=false;
  }
  toggleDescription(product:Car){
    this.showDescription=true;
    this.productDescription=product.description;
    this.productTitle=product.title;
    this.productPrice=product.price;
    this.productImages=product.images;

  }
    constructor(
      private vehicles:ProductsService
    ) {
  }

    ngOnInit(): void {
      this.vehicles.getAllProducts()
      .subscribe(data=>{this.productos=data});


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
