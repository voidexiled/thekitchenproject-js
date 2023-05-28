import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocinaRoutingModule } from './cocina-routing.module';

import { CocinaComponent } from './pages/cocina.component';
import { SharedModule } from '../../shared/shared.module';
import { CocinaTableComponent } from './components/cocina-table/cocina-table.component';


@NgModule({
  declarations: [CocinaComponent],
  imports: [CommonModule, CocinaRoutingModule, CocinaTableComponent, SharedModule],
  exports: [CocinaComponent]
})
export class CocinaModule { }
