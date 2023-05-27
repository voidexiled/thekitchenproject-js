import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CocinaTableComponent } from './cocina-table/cocina-table.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CocinaTableComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
