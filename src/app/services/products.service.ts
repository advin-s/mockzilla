import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  serverAddress = environment.serverAddress;

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(`${this.serverAddress}/products?limit=10`)
  }

  searchProducts(searchString:string):Observable<any>{
    return this.http.get(`${this.serverAddress}/products/search?q=${searchString}`)
  }
}
