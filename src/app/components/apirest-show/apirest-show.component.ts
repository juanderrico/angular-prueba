import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service"
import { Product, CreateProductDTO } from '../../models/product.model';

@Component({
  selector: 'app-apirest-show',
  templateUrl: './apirest-show.component.html',
  styleUrls: ['./apirest-show.component.scss']
})
export class APIRestShowComponent implements OnInit {
  load:boolean=false;
  productos:Product[]=[];
  showDescription:boolean=false;
  editproduct:boolean=false;
  specificProduct:Product=this.productos[0];
  limit:number=14;
  offset:number=0;
  idDescription:number=0;
  showAgregar:boolean=false
  productoAAgregar:CreateProductDTO={
    title:"",
    price:0,
    images:[],
    description:"",
    categoryId:0
  }

  hideDescription(){
    this.showDescription=false;
  }

    constructor(
      private vehicles:ProductsService
    ) {
  }

    ngOnInit(): void {
      this.vehicles.getAllProducts(14,0)
      .subscribe(data=>{this.productos=data});


    }
    toggleAgregar(){
      this.showAgregar=true
    }
    toggleDescription(id:number){
      this.vehicles.getSpecificProduct(id)
      .subscribe(data=>{this.specificProduct=data})
        this.showDescription=true
    }
    loadMore(){
      this.offset+=this.limit
      this.vehicles.getAllProducts(this.limit,this.offset)
      .subscribe(data=>{this.productos=data})
    }
    loadLess(){
      this.offset-=this.limit
      this.vehicles.getAllProducts(this.limit,this.offset)
      .subscribe(data=>{this.productos=data})
    }
    toggleEditar(){
      this.editproduct=true;
    }
    editarApi(){

    }
    agregarApi(){

    }
  }
