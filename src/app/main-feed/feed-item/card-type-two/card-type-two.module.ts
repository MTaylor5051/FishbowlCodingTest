import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardTypeTwoComponent } from './card-type-two.component';
import { SharedUiModule } from 'src/app/shared/ui/shared-ui.module';

@NgModule({
  declarations: [
    CardTypeTwoComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ],
  exports: [
    CardTypeTwoComponent
  ]
})
export class CardTypeTwoModule { }
