import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/product';
import { AccessoriesService } from '../services/accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  products: Product[];
  type: Product;

  onSelect(product: Product){
    this.type = product;
  }

  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit() {
    this.products = this.accessoriesService.returnProducts();
  }

}
