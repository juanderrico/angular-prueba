export interface Category{
  id:string
  name:string
}

export interface Product{
  id:number;
  title:string;
  price:number;
  images:string[];
  description:string;
  category:string;
}
export interface CreateProductDTO{
  title:string;
  price:number;
  images:string[];
  description:string;
  categoryId:number;
}
