import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  exports: [
    InfiniteScrollModule,
    TooltipModule,
    ReactiveFormsModule
  ]
})
export class SharedUiModule { }
