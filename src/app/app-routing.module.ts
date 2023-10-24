import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/Components/products-details/products-details.component';
import { CartComponent } from './carts/cart/cart.component';

const routes: Routes = [
  {path:'products',component:AllProductsComponent},
  {path:'details/:id',component:ProductsDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'**',redirectTo:'products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
