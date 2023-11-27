import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
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
export class ProductsListComponent implements OnInit{
  public products$: Observable<IProducts[]> = this.productsService.products$;
  public tags$: Observable<ITags[]> = this.tagsService.tags$;
  public selectedTags:string[] = [];

  constructor(private router: Router, 
    private productsService: ProductsService, 
    private productsApiService: ProductsApiService,
    private tagsApiService: TagsApiService,
    private tagsService: TagService){}

  ngOnInit(): void {
    this.productsApiService.getProducts().subscribe(products => {
      this.productsService.setPosts(products);
    })
    this.tagsApiService.getTags().subscribe(tags => {
      this.tagsService.setTags(tags)
  })
}

  goToAddNewProduct():void {
    this.router.navigate(["/addNewProduct"])
  }

  goToProductDetails(id:string):void {
    this.router.navigate(['/productDetails', id])
  }
}
