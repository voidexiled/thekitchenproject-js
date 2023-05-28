import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CocinaComponent } from './pages/cocina.component';

const routes: Routes = [
  {
    path: '',
    component: CocinaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocinaRoutingModule { }
