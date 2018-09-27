import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { ProductService } from './services/product.service';
import { DressesService } from './services/dresses.service';
import { AccessoriesService } from './services/accessories.service';
import { PantsService } from './services/pants.service';


import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { UpperBarComponent } from './upper-bar/upper-bar.component';
import { LowerBarComponent } from './lower-bar/lower-bar.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { DressesComponent } from './dresses/dresses.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { LoginComponent } from './login/login.component';
import { AccessoriesdetailComponent } from './accessoriesdetail/accessoriesdetail.component';
import { DressesdetailComponent } from './dressesdetail/dressesdetail.component';
import { PantsdetailComponent } from './pantsdetail/pantsdetail.component';
import { ContactusComponent } from './contactus/contactus.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductdetailComponent,
    UpperBarComponent,
    LowerBarComponent,
    ShirtsComponent,
    PantsComponent,
    DressesComponent,
    AccessoriesComponent,
    LoginComponent,
    AccessoriesdetailComponent,
    DressesdetailComponent,
    PantsdetailComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    AppRoutingModule, 
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule
  ],

  entryComponents: [
    LoginComponent
  ], 
  
  providers: [ProductService, DressesService, AccessoriesService, PantsService ],
  bootstrap: [AppComponent]
  
})


export class AppModule { }
