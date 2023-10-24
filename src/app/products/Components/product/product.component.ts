import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() item!:Product;
@Output() data=new EventEmitter();
displayAddToCartButton:boolean=false;
quantity:number=0;
constructor(){

}

sendData(event:any){
this.data.emit({item:this.item,quantity:this.quantity});
}
}
