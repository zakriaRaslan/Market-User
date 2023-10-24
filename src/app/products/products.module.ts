import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './Components/product/product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent,
    ],
    exports: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        BrowserModule,
    ]
})
export class ProductsModule { }
