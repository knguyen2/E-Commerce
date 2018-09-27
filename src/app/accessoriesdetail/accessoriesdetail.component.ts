import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { AccessoriesService } from '../services/accessories.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; //Location is for the back/next buttons

@Component({
  selector: 'app-accessoriesdetail',
  templateUrl: './accessoriesdetail.component.html',
  styleUrls: ['./accessoriesdetail.component.css']
})
export class AccessoriesdetailComponent implements OnInit {

  selectedProduct: Product;

  constructor(private accessoriesservice: AccessoriesService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log('id-');                         // for troubleshooting purposes
    console.log('id');                          // for troubleshooting purposes

    this.selectedProduct = this.accessoriesservice.returnProduct(id);
  }

  goBack(): void{
    this.location.back();
  }

  ReviewCount(count:number){
    return new Array(count);
  }

}
