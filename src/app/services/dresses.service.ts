import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { DRESSESItems } from '../shared/dresses';

@Injectable()
export class DressesService {

  constructor() { }

  returnProducts(): Product[] {
    return DRESSESItems;
  }

  returnProduct(id: number): Product {
    return DRESSESItems.filter((product) => (product.id === id))[0];
  }
}
