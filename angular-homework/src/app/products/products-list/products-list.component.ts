import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSelectModule, MatOptionModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  constructor(private router: Router){}

  goToAddNewProduct():void {
    this.router.navigate(["/addNewProduct"])
  }

  goToProductDetails(id:string):void {
    this.router.navigate(['/productDetails', id])
  }
}
