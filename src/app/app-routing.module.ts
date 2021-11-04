import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mainFeed',
    loadChildren: () => import('./main-feed/main-feed.module').then(m => m.MainFeedModule)
  },
  { path: '**', redirectTo: '/mainFeed' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
