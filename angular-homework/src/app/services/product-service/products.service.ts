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

  private readonly _filteredProducts$: BehaviorSubject<IProducts[]> = new BehaviorSubject<IProducts[]>([]);
  public readonly filteredProducts$ = this._filteredProducts$;

  constructor() {
    this.loadProductsFromLocalStorage();
  }

  private get products(): IProducts[] {
    return this._products$.getValue();
  }

  private get filteredProducts(): IProducts[] {
    return this._filteredProducts$.getValue();
  }

  private set filteredProducts(products: IProducts[]) {
    this._filteredProducts$.next(products);
  }

  public setFilteredProducts(products: IProducts[]): void {
    this.filteredProducts = products;
  }

  private set products(products: IProducts[]) {
    this._products$.next(products);
    this.saveProductsToLocalStorage(products)
  }

  public setProducts(products: IProducts[]): void {
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
    this.filteredProducts = updatedProducts;
  }

  public getProductById(id: string): IProducts | undefined {
    return this.products.find(product => product.id === id);
  }

  public addProduct(newProduct: IProducts): void {
    this.products = [...this.products, newProduct]
  }

  public editProduct(updatedProduct: IProducts): void {
    this.products = this.products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
  }

  public filterProduct(selectedTags: string[]): void {
    const storedProducts = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]') as IProducts[];
    let filteredProducts: IProducts[];
    if (selectedTags.length === 0) {
      filteredProducts = storedProducts;
    } else {
      filteredProducts = storedProducts.filter(product => 
        product.tags.some(tag => selectedTags.includes(tag.id))
      );
    }
    this._filteredProducts$.next(filteredProducts);
    console.log(this.filteredProducts$)
  }
}
