import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


    constructor(private http:HttpClient) { }
    getAllProducts(){
      return this.http.get<Car[]>("https://young-sands-07814.herokuapp.com/api/products"

  )
}}

  export interface Car {
    id:number;
    title:string;
    price:number;
    images:string[];
    description:string;
    category:string;
    showDes:boolean;


}
