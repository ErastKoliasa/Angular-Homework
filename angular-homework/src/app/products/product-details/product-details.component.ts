import { Component, OnInit, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../products';
import { ProductsService } from '../../services/product-service/products.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id: string = "";
  selectedProduct: IProducts | undefined;

  constructor(private router: Router, private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedProduct = this.productsService.getProductById(params['id'])
    })
  }

  deleteProduct(id: string | undefined) {
    if (id) {
      this.productsService.deleteProductById(id);
      this.router.navigate(["/"])
    }
  }

  goToEditForm(id: string | undefined): void {
    if (id !== undefined) {
      this.router.navigate(["/editForm", id])
    }
  }
}
