import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductDTO } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    apiUrl="https://young-sands-07814.herokuapp.com/api/products";
    constructor(private http:HttpClient) { }
    getAllProducts(limit:number, offset:number){
      return this.http.get<Product[]>(`${this.apiUrl}` , {
        params: {limit,offset }
      }
    )
  }

    getSpecificProduct(id:number){
      return this.http.get<Product>(`${this.apiUrl}/${id}`)}

    addProduct(object: CreateProductDTO){
      return this.http.post<CreateProductDTO>(this.apiUrl,object)
    }
    editProduct(id:string, object:Product){
      return this.http.put<Product>(this.apiUrl,object)
    }}
