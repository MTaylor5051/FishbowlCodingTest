import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedUiModule } from '../shared/ui/shared-ui.module';

import { MainFeedComponent } from './main-feed.component';
import { FeedItemModule } from './feed-item/feed-item.module';




const routes: Routes = [
  {
    path: '',
    component: MainFeedComponent
  }
];


@NgModule({
  declarations: [
    MainFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    FeedItemModule
],
})
export class MainFeedModule { }
