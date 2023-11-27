import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ITags } from '../../tags/tags';
import { ProductsService } from '../product-service/products.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private readonly localStorageKey = 'tags';
  private readonly _tags$: BehaviorSubject<ITags[]> = new BehaviorSubject<ITags[]>([]);
  public readonly tags$ = this._tags$;

  constructor(private productsService: ProductsService){
    this.loadTagsFromLocalStorage();
  }

  private get tags():ITags[] {
    return this._tags$.getValue();
  }

  private set tags(tags:ITags[]){
    this._tags$.next(tags);
    this.saveTagsToLocalStorage(tags)
  }

  public setTags(tags: ITags[]): void{
    this.tags = tags;
  }

  private saveTagsToLocalStorage(tags: ITags[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tags));
  }

  private loadTagsFromLocalStorage(): void {
    const savedTags = localStorage.getItem(this.localStorageKey);
    if (savedTags) {
      this._tags$.next(JSON.parse(savedTags));
    }
  }

  public deleteTagById(id: string): void {
    const updatedTags = this.tags.filter(tag => tag.id !== id);
    this.tags = updatedTags;
    this.productsService.products$.pipe(take(1)).subscribe(products => {
      const updatedProducts = products.map(product => {
        const updatedProductTags = product.tags.filter(tag => tag.id !== id);
        return { ...product, tags: updatedProductTags };
      });
      this.productsService.setProducts(updatedProducts);
    });
}
}
