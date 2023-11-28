import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsApiService } from './services/product-service/products-api.service';
import { ProductsService } from './services/product-service/products.service';
import { TagService } from './services/tag-service/tag.service';
import { TagsApiService } from './services/tag-service/tags-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, HttpClientModule],
  providers: [TagService, TagsApiService, ProductsService, ProductsApiService,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-homework';
}
