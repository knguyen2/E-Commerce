import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product';
import { PantsService } from '../services/pants.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-pantsdetail',
  templateUrl: './pantsdetail.component.html',
  styleUrls: ['./pantsdetail.component.css']
})
export class PantsdetailComponent implements OnInit {

  selectedProduct: Product;

  constructor(private pantsservice: PantsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log('id-');
    console.log('id');

    this.selectedProduct = this.pantsservice.returnProduct(id);
  
  }
    goBack(): void{
      this.location.back();
    }

    ReviewCount(count:number){
      return new Array(count);
    }  
}
