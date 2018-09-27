import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PANTSItems } from '../shared/pants';

@Injectable()
export class PantsService {

  constructor() { }

  returnProducts(): Product[] {
    return PANTSItems;
  }

  returnProduct(id: number): Product {
    return PANTSItems.filter((product) => (product.id === id))[0];
  }

}
