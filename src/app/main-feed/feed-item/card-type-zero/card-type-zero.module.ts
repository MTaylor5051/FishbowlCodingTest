import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardTypeZeroComponent } from './card-type-zero.component';
import { SharedUiModule } from 'src/app/shared/ui/shared-ui.module';



@NgModule({
  declarations: [
    CardTypeZeroComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ],
  exports: [
    CardTypeZeroComponent
  ]
})
export class CardTypeZeroModule { }
