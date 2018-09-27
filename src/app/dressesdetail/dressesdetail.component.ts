import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { DressesService } from '../services/dresses.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; //Location is for the back/next buttons


@Component({
  selector: 'app-dressesdetail',
  templateUrl: './dressesdetail.component.html',
  styleUrls: ['./dressesdetail.component.css']
})
export class DressesdetailComponent implements OnInit {

  selectedProduct: Product;

  constructor(private dressesservice: DressesService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log('id-');
    console.log('id');

    this.selectedProduct = this.dressesservice.returnProduct(id);
  }

  goBack(): void{
    this.location.back();
  }

  ReviewCount(count:number){
    return new Array(count);
  }

}
