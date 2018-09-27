import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { SHIRTSItems } from '../shared/shirts';

@Injectable()
export class ProductService {

  constructor() { }

  returnProducts(): Product[] {
    return SHIRTSItems;
  }

  returnProduct(id: number): Product {
    return SHIRTSItems.filter((product) => (product.id === id))[0];
  }
}
