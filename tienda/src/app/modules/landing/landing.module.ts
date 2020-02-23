import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { LandingComponent } from './landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ListComponent } from './catalog/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    NavbarComponent,
    CatalogComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
