import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { LandingComponent } from './landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ListComponent } from './catalog/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchByPipe } from 'src/app/pipes/search-by.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule, NgbTypeahead, NgbTypeaheadModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from '../payment/checkout/checkout.component';



@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    NavbarComponent,
    CatalogComponent,
    ListComponent,
    SearchByPipe,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    LandingRoutingModule,
    NgbTypeaheadModule,
    NgbAlertModule
    // NgbModalModule
  ],
  entryComponents: [
    CheckoutComponent
  ]
})
export class LandingModule { }
