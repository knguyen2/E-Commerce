import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; //Location is for the back/next buttons
/*
const PRODUCT = {
  name: 'Green Blouse',
  image: '/assets/images/GreenBlouse.jpg',  
  category: 'Shirts',
  label: 'New In',
  price: '$$',
  description: 'describe product',
  feedbacks: [
    {
      rating: 5,
      comment: 'say something',
      author: 'author name',
      date: '2017-12-16T17:57:28.556094Z',
    },
    {
      rating: 5,
      comment: 'Your Comment!',
      author: 'Your Name',
      date: '2018-02-06T17:57:28.556094Z'
    },
    {
      rating: 5,
      comment: 'say something',
      author: 'author name',
      date: '2018-10-05T17:57:28.556094Z'
    },
    {
      rating: 3,
      comment: 'say something',
      author: 'author name',
      date: '2017-11-13T17:57:28.556094Z'
    },    
    {
      rating: 1,
      comment: 'say something',
      author: 'author name',
      date: '2017-09-02T17:57:28.556094Z'
    }
  ]
};
*/

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})

export class ProductdetailComponent implements OnInit {

  selectedProduct: Product; 

  /*
  types = PRODUCT;

  selectedProduct = this.types;
  */

  // @Input() selectedProduct: Product;

  constructor(private productservice: ProductService,  
    private route: ActivatedRoute,
    private location: Location) {}    

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log('id-');                         // for troubleshooting purposes
    console.log('id');                          // for troubleshooting purposes

    this.selectedProduct = this.productservice.returnProduct(id);
   
    }

 
   goBack(): void {
     this.location.back();
   }

   ReviewCount(count:number){
     return new Array(count);
   }
  
}
