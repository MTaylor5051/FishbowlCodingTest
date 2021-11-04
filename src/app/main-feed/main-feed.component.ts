import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs/internal/observable/forkJoin';

import { IMetaResponsePayload } from './../shared/api/consolidated/models/meta.response-model';
import { IPostsResponsePayload } from './../shared/api/consolidated/models/posts.response-model';
import { MetaService } from '../shared/api/consolidated/meta.service';
import { PostsService } from '../shared/api/consolidated/posts.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {


  listArray : string[] = [];
  sum = 20;
  direction = "";

  constructor(private _postsService: PostsService, private _metaService: MetaService) {
    this.appendItems();
  }

  ngOnInit(): void {
    forkJoin({
      posts: this._postsService.getPosts(20,0),
      meta: this._metaService.getMeta()
    }).subscribe({
     next: (response: {posts: IPostsResponsePayload, meta: IMetaResponsePayload} )=> console.log(response),
     error: (error: any) => console.log(error),
     complete: () => console.log('This is how it ends!'),
    });
  }


  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    this.sum += 20;
    this.appendItems();

    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    this.sum += 20;
    this.prependItems();

    this.direction = "scroll up";
  }

  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if( _method === 'push'){
        this.listArray.push([i].join(""));
      }else if( _method === 'unshift'){
        this.listArray.unshift([i].join(""));
      }
    }
  }

}
