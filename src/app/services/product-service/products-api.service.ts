import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProducts } from '../../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private productsUrl:string = '../../../assets/products.json';

  constructor(private http: HttpClient) { }

  public getProducts():Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.productsUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error(error.status, error.message)
    throw ('Something bad happened; please try again later.');
  }
}
