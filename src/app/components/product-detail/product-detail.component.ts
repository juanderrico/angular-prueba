import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "../../services/products.service"
import { Product, CreateProductDTO } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product!:Product
  @Input() showDescription:boolean=false
  @Output() cerrar = new EventEmitter()
  editproduct:boolean=false
  productoAEditar!:CreateProductDTO
  constructor(
    private productos:ProductsService
  ) { }

  ngOnInit(): void {

  }
  toggleDesc(){

    this.cerrar.emit()
  }
  toggleEditar(){
    this.editproduct=true
  }
  editarApi(){}

}
