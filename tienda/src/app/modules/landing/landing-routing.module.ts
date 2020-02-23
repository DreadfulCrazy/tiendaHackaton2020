import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'catalog', component: CatalogComponent }
    ]
  }
  // { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }