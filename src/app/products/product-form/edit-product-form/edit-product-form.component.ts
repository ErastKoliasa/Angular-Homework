import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducts, Products } from '../../products';
import { Observable } from 'rxjs';
import { ITags } from '../../../tags/tags';
import { ProductsService } from '../../../services/product-service/products.service';
import { TagService } from '../../../services/tag-service/tag.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-edit-product-form',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatOptionModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './edit-product-form.component.html',
  styleUrl: './edit-product-form.component.css'
})
export class EditProductFormComponent implements OnInit{
  public selectedProduct: IProducts | undefined;
  public tags$: Observable<ITags[]> = this.tagsService.tags$;
  
  constructor(private productService: ProductsService, 
    private tagsService: TagService, 
    private router: Router, 
    private route: ActivatedRoute){}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.selectedProduct = this.productService.getProductById(params['id']);
      });
    }

  public editProduct(): void {
    if (this.selectedProduct) {
      this.productService.editProduct(this.selectedProduct);
      this.navigateToProductDetails(this.selectedProduct.id);
    }
  }

  compareTags(tag1: ITags, tag2: ITags): boolean {
    return tag1 && tag2 ? tag1.id === tag2.id : tag1 === tag2;
  }

  public navigateToProductDetails(id:string): void {
    this.router.navigate(['/productDetails', id]);
  }
}
