import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(environment.baseApi +'products')
  }
  getProductById(id:any){
    return this.http.get(`${environment.baseApi}products/${id}`)
  }
  getAllCategories(){
    return this.http.get(`${environment.baseApi}products/categories`)
  }
  getProductsByCategory(category:string){
    return this.http.get(`${environment.baseApi}products/category/${category}`)
  }
}
