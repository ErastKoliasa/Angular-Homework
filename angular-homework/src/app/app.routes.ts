import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { TagsListComponent } from './tags/tags-list.component';
import { ProductFormComponent } from './products/product-form/add-product-form/product-form.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { EditProductFormComponent } from './products/product-form/edit-product-form/edit-product-form.component';

export const routes: Routes = [
    {path: "", component: ProductsListComponent},
    {path: "tags", component: TagsListComponent},
    {path: "addNewProduct/:id", component: ProductFormComponent},
    {path: "addNewProduct", component: ProductFormComponent},
    {path: "editForm/:id", component: EditProductFormComponent},
    {path: "productDetails/:id", component: ProductDetailsComponent}
];
