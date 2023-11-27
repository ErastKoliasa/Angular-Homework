import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { IProducts, Products } from '../products';
import { ProductsService } from '../../services/product-service/products.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TagService } from '../../services/tag-service/tag.service';
import { Observable } from 'rxjs';
import { ITags } from '../../tags/tags';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  public newProduct: IProducts = new Products("", null, "", []);
  public tags$: Observable<ITags[]> = this.tagsService.tags$;
  
  constructor(private productService: ProductsService, private tagsService: TagService, private router: Router){}

  public addProduct(): void {
    this.productService.addProduct(this.newProduct);
    this.newProduct = new Products("", 0, "", []);
    this.navigateToList();
  }

  public navigateToList(): void {
    this.router.navigate(['/']);
  }
}
