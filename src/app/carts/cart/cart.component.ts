import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartProducts:any[]=[];
totalCartPrice:number=0;
success:boolean=false;
error:boolean = false;
loading:boolean = false
emptyCart=true;
  constructor(private cartService:CartService){

  }

  ngOnInit() {
  this.getActiveCart();
  this.getTotalCartPrice();
  }


  getActiveCart(){
  this.cartProducts =  JSON.parse(localStorage.getItem('cart')!)
   if(this.cartProducts.length==0){
   this.emptyCart=true;
   }else{
   this.emptyCart=false;
   }
  }

  updateCart(){
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    this.getActiveCart();
  }
  getTotalCartPrice(){
    this.totalCartPrice = 0;
    for(let x in this.cartProducts){
      this.totalCartPrice += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
    return this.getTotalCartPrice;
  }

  addAmount(index:number){
    this.cartProducts[index].quantity++;
    this.updateCart();
    this.getActiveCart();
    this.getTotalCartPrice();
  }

  minsAmount(index:number){
    this.cartProducts[index].quantity--;
    this.updateCart();
    this.getActiveCart();
    this.getTotalCartPrice();
  }
  detectChangeAmount(){
this.updateCart();
this.getTotalCartPrice()
  }

deleteProduct(index:number){
this.cartProducts.splice(index,1);
this.updateCart();
this.getTotalCartPrice()
}
clearCart(){
  this.cartProducts = [];
  this.updateCart();
  this.getTotalCartPrice();
}

orderCart(){
  this.loading =true
  let products = this.cartProducts.map((item)=>{
    return {productId:item.item.id , quantity:item.quantity}
  })
let cart = {
  userId:4,
  date:new Date(),
  products:products
}
this.cartService.orderCart(cart).subscribe(()=>{
this.loading=false;
this.success = true;
this.clearCart();
},(error)=>{
  this.loading = false;
  this.error = true;
})
}
}
