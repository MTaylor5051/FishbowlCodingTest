import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItemComponent } from './feed-item.component';

import { PostModule } from './post/post.module';
import { CardTypeZeroModule } from './card-type-zero/card-type-zero.module';
import { CardTypeTwoModule } from './card-type-two/card-type-two.module';

@NgModule({
  declarations: [
    FeedItemComponent
  ],
  imports: [
    CommonModule,
    PostModule,
    CardTypeZeroModule,
    CardTypeTwoModule
  ],
  exports: [
    FeedItemComponent
  ]
})
export class FeedItemModule { }
