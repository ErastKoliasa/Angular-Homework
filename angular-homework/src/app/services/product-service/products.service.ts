import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProducts, Products } from '../../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly _products$: BehaviorSubject<IProducts[]> = new BehaviorSubject<IProducts[]>([]);
  public readonly products$ = this._products$;

  get products():IProducts[] {
    return this._products$.getValue();
  }

  private set products(products:IProducts[]){
    this._products$.next(products);
  }

  public setPosts(products: IProducts[]): void{
    this.products = products;
  }
}
