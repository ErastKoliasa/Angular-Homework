import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProducts } from '../../products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly localStorageKey = 'products';
  private readonly _products$: BehaviorSubject<IProducts[]> = new BehaviorSubject<IProducts[]>([]);
  public readonly products$ = this._products$;

  constructor(){
    this.loadProductsFromLocalStorage();
  }

  private get products(): IProducts[] {
    return this._products$.getValue();
  }

  private set products(products:IProducts[]){
    this._products$.next(products);
    this.saveProductsToLocalStorage(products)
  }

  public setProducts(products: IProducts[]): void{
    this.products = products;
  }

  private saveProductsToLocalStorage(products: IProducts[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(products));
  }

  private loadProductsFromLocalStorage(): void {
    const savedProducts = localStorage.getItem(this.localStorageKey);
    if (savedProducts) {
      this._products$.next(JSON.parse(savedProducts));
    }
  }

  public deleteProductById(id: string): void {
    const updatedProducts = this.products.filter(product => product.id !== id);
    this.products = updatedProducts;
  }

  public getProductById(id:string): IProducts | undefined {
    return this.products.find(product => product.id === id);
  }
}
