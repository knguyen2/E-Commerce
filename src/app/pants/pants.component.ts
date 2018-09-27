import { Component, OnInit } from '@angular/core';
import { Product } from './../shared/product';
import { PantsService } from '../services/pants.service';
@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  products: Product[];
  type: Product;

  onSelect(product: Product){
    this.type = product;
  }

  constructor(private pantsService: PantsService) { }

  ngOnInit() {
    this.products = this.pantsService.returnProducts();
  }

}
