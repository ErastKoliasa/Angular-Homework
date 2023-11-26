import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  public getProducts():Observable<IProducts[]>{
    return this.http.get<IProducts[]>('../../../assets/products.json');
  }
}
