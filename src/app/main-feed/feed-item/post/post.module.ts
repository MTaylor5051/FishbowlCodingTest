import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post.component';
import { SharedUiModule } from 'src/app/shared/ui/shared-ui.module';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
