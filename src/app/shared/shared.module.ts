import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
  declarations: [TitleBarComponent, PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TitleBarComponent, TranslateModule, WebviewDirective, FormsModule]
})
export class SharedModule { }
