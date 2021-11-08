import { Component, Input } from '@angular/core';

import { ICard } from 'src/app/shared/api/consolidated/models/meta.response-model';
import { IPost } from 'src/app/shared/api/consolidated/models/posts.response-model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent {

  @Input() feedItem!: ICard | IPost;

  constructor() { }

  get isCardTypeZero(): boolean {
    return (this.feedItem as ICard).type === 0;
  }

  get isCardTypeTwo(): boolean {
    return (this.feedItem as ICard).type === 2;
  }

  get isPost(): boolean {
    return (this.feedItem as IPost).feedId !== undefined;
  }

  get returnCard(): ICard | undefined {
    return (this.isCardTypeZero || this.isCardTypeTwo) ? (this.feedItem as ICard) : undefined;
  }

  get returnPost(): IPost | undefined {
    return this.isPost ? (this.feedItem as IPost) : undefined;
  }


}
