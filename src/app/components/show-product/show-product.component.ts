import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "../../services/products.service"
import { Product, CreateProductDTO } from '../../models/product.model';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  @Output() description = new EventEmitter<number>();
  @Output() agregar = new EventEmitter();
  productos:Product[]=[];
  offset:number=0;
  limit:number=14;

  constructor(private vehicles:ProductsService) { }

  ngOnInit(): void {
    this.vehicles.getAllProducts(this.limit,this.offset)
    .subscribe(data=>{this.productos})}
    toggleDescription(id:number){
      this.description.emit(id)
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
    toggleAgregar(){
      this.agregar.emit()
    }
  }
