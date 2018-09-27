import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { ACCESSORIESItems } from '../shared/accessories';

@Injectable()
export class AccessoriesService {

  constructor() { }

  returnProducts(): Product[] {
    return ACCESSORIESItems;
  }

  returnProduct(id: number): Product {
    return ACCESSORIESItems.filter((product) => (product.id === id))[0];
  }
}
