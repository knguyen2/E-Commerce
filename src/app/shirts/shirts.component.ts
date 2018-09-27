import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/product';
import { ProductService } from '../services/product.service';
 
@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})

export class ShirtsComponent implements OnInit {

  products: Product[];
  type: Product;

  onSelect(product: Product){
    this.type = product;
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.returnProducts();
  }

}
