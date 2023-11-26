import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { TagsListComponent } from './tags/tags-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
    {path: "", component: ProductsListComponent},
    {path: "tags", component: TagsListComponent},
    {path: "addNewProduct/:id", component: ProductFormComponent},
    {path: "addNewProduct", component: ProductFormComponent},
    {path: "productDetails/:id", component: ProductDetailsComponent}
];
