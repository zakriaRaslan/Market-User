import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product:any;
  productId:any;
  Loading:boolean=false;
constructor(private router:ActivatedRoute , private productService:ProductService){
this.productId = this.router.snapshot.paramMap.get('id');
}

ngOnInit() {
this.getProductById(this.productId)
}
getProductById(productId:any){
  this.Loading=true
this.productService.getProductById(productId).subscribe((res:any)=>{
  this.Loading=false
  this.product=res;
},(error)=>{
  alert(error);
  this.Loading=false;
})
}

}
