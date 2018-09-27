import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { PantsdetailComponent } from '../pantsdetail/pantsdetail.component';
import { DressesdetailComponent } from '../dressesdetail/dressesdetail.component';
import { AccessoriesdetailComponent} from '../accessoriesdetail/accessoriesdetail.component';
import { ShirtsComponent } from '../shirts/shirts.component';
import { PantsComponent } from '../pants/pants.component';
import { DressesComponent } from '../dresses/dresses.component';
import { AccessoriesComponent } from '../accessories/accessories.component';
import { ContactusComponent } from '../contactus/contactus.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productdetail/:id', component: ProductdetailComponent},
  { path: 'pantsdetail/:id', component: PantsdetailComponent},
  { path: 'dressesdetail/:id', component: DressesdetailComponent},
  { path: 'accessoriesdetail/:id', component: AccessoriesdetailComponent},
  { path: 'shirts', component: ShirtsComponent},
  { path: 'pants', component: PantsComponent},
  { path: 'dresses', component: DressesComponent},
  { path: 'accessories', component: AccessoriesComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
