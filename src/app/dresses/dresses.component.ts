import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/product';
import { DressesService } from '../services/dresses.service';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent implements OnInit {

  products: Product[];
  type: Product;

  onSelect(product: Product){
    this.type = product;
  }

  constructor(private dressesService: DressesService) { }

  ngOnInit() {
    this.products = this.dressesService.returnProducts();
  }

}
