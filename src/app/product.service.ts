import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl= 'http://localhost:57312/api';

  formData: Product;
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any>{
    return this.http.get(this.baseUrl+'/Product');
  }


  deletePdt(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/Product/'+id);
  }

  addPdt(pdt: Product){
    return this.http.post(this.baseUrl+'/Product',pdt);
  }

  editPdt(id: number){
    return this.http.delete(this.baseUrl+'/Product/'+id);
  }
  
  getProduct(id: number): Observable<any>{
    return this.http.get(this.baseUrl+'/Product/'+id);
  }

  putProduct(id:number, pdt: Product): Observable<any>{
    return this.http.put(this.baseUrl+'/Product/'+ id, pdt);
  }




}
