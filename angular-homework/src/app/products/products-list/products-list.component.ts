import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { ProductsApiService } from '../../services/product-service/products-api.service';
import { Observable } from 'rxjs';
import { IProducts } from '../products';
import { ProductsService } from '../../services/product-service/products.service';
import { TagService } from '../../services/tag-service/tag.service';
import { ITags } from '../../tags/tags';
import { FormsModule } from '@angular/forms';
import { TagsApiService } from '../../services/tag-service/tags-api.service';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSelectModule, MatOptionModule, CurrencyPipe, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  public products$: Observable<IProducts[]> = this.productsService.filteredProducts$;
  public tags$: Observable<ITags[]> = this.tagsService.tags$;
  public selectedTags: string[] = [];

  constructor(private router: Router,
    private productsService: ProductsService,
    private productsApiService: ProductsApiService,
    private tagsApiService: TagsApiService,
    private tagsService: TagService) {}

  ngOnInit(): void {
    if (!this.productsService.products$.getValue().length) {
      this.productsApiService.getProducts().subscribe(products => {
        this.productsService.setProducts(products);
      })
    }
    if (!this.tagsService.tags$.getValue().length) {
      this.tagsApiService.getTags().subscribe(tags => {
        this.tagsService.setTags(tags);
      })
    }
    this.clearSelectedTags();
  }

  public deleteProduct(id: string) {
    this.productsService.deleteProductById(id);
    this.clearSelectedTags();
  }

  public goToAddNewProduct(): void {
    this.clearSelectedTags();
    this.router.navigate(["/addNewProduct"]);
  }

  public goToProductDetails(id: string): void {
    this.productsService.getProductById(id);
    this.clearSelectedTags();
    this.router.navigate(['/productDetails', id]);
  }

  public filterProducts(){
    this.productsService.filterProduct(this.selectedTags)
  }

  public clearSelectedTags(): void {
    this.selectedTags = [];
    this.filterProducts();
  }
}
