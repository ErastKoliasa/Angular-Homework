import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { ProductsApiService } from '../../services/product-service/products-api.service';
import { Observable } from 'rxjs';
import { IProducts } from '../products';
import { ProductsService } from '../../services/product-service/products.service';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSelectModule, MatOptionModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
  public products$: Observable<IProducts[]> = this.productsService.products$;

  constructor(private router: Router, private productsService: ProductsService, private productsApiService: ProductsApiService){}

  ngOnInit(): void {
    this.productsApiService.getProducts().subscribe(products => {
      this.productsService.setPosts(products);
    })
  }

  goToAddNewProduct():void {
    this.router.navigate(["/addNewProduct"])
  }

  goToProductDetails(id:string):void {
    this.router.navigate(['/productDetails', id])
  }
}
