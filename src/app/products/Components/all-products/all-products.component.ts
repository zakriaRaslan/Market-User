import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
Products:Product[]=[];
Categories:string[]=[];
Loading:boolean=false;
CartProducts:any[]=[];
  constructor(private productService:ProductService){}

ngOnInit() {
    this.AllProducts();
    this.AllCategories();
}

  AllProducts(){
    this.Loading=true;
    return this.productService.getAllProducts().subscribe((res:any)=>{
      this.Products = res;
      this.Loading=false
    },(error)=>{
      this.Loading=false
      alert(error)
    })
  }
  AllCategories(){
    this.Loading=true
    return this.productService.getAllCategories().subscribe((res:any)=>{
      this.Categories=res;
      this.Loading=false
    },(error)=>{
      this.Loading=false
      alert(error)
    })
  }
  FilterProductsByCategory(event:any){
    this.Loading=true;
    let value = event.target.value;
  (value=='all')?this.AllProducts():this.ProductsByCategory(value);
  this.Loading=false;
  }
  ProductsByCategory(category:string){
    this.Loading=true
    return this.productService.getProductsByCategory(category).subscribe((res:any)=>{
      this.Products=res;
      this.Loading=false
    },(error)=>{
      this.Loading=false
      alert(error);
    })
  }

  AddToCart(event:any){
    if(event.quantity>0){
    if('cart' in localStorage){
      this.CartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.CartProducts.find(item=>item.item.id == event.item.id)
      if(exist){
        if(exist.quantity != event.quantity){
          let existIndex =  this.CartProducts.indexOf(exist);
          this.CartProducts[existIndex].quantity = event.quantity;
          localStorage.setItem('cart',JSON.stringify(this.CartProducts));
        }else{
        alert('Item Is Already In Your Cart');
      }
      }else{
        this.addCartProductsTolocaleStorage(event);
      }
    }else{
      this.addCartProductsTolocaleStorage(event);
    }
  }else{
    alert("Quantity Can't Be Zero");
  }
  }

  addCartProductsTolocaleStorage(data:any){
    this.CartProducts.push(data);
    localStorage.setItem('cart',JSON.stringify(this.CartProducts));
  }
}
