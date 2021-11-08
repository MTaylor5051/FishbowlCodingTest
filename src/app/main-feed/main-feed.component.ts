import { Component, OnInit, NgModule } from '@angular/core';

import { forkJoin } from 'rxjs/internal/observable/forkJoin';

import { ICard, IMetaResponsePayload } from './../shared/api/consolidated/models/meta.response-model';
import { IPost, IPostsResponsePayload } from './../shared/api/consolidated/models/posts.response-model';
import { MetaService } from '../shared/api/consolidated/meta.service';
import { PostsService } from '../shared/api/consolidated/posts.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {
  cards: ICard[] = [];
  feedItems: Array<ICard | IPost> = [];
  postServiceStartIndex: number = 0;
  postServiceResultCount: number = 20;

  constructor(private _postsService: PostsService, private _metaService: MetaService) { }

  ngOnInit(): void {
    forkJoin({
      posts: this._postsService.getPosts(this.postServiceResultCount,this.postServiceStartIndex),
      meta: this._metaService.getMeta()
    }).subscribe({
     next: (response: {posts: IPostsResponsePayload, meta: IMetaResponsePayload} ) => {

       this.cards = this._filterCards(response.meta.cards || []);
       this.feedItems = [...this._mixCardsWithPosts(this.cards, response.posts.posts)]

       this.postServiceStartIndex = this.postServiceResultCount + this.postServiceStartIndex;
     }
    });
  }


  loadPosts(): void {
    this._postsService.getPosts(this.postServiceResultCount, this.postServiceStartIndex).subscribe({
      next: (response: IPostsResponsePayload) => {
        this.feedItems = [...this.feedItems, ...this._mixCardsWithPosts(this.cards, response.posts)]

        this.postServiceStartIndex = this.postServiceResultCount + this.postServiceStartIndex;
      }
    })
  }


  onScrollDown(): void {
    this.loadPosts();
  }

  private _filterCards(cards: ICard[]): ICard[] {
    const cardsFilteredByType: ICard[] = cards.filter((card: ICard) => card.type === 0 || card.type === 2);
    const cardsFilteredByPriority: ICard[] = [];
    const cardsIndexedByPriority: {[key: string]: ICard} = {};

    for (let card of cardsFilteredByType) {
      if(cardsIndexedByPriority[card.position] === undefined) {
        cardsIndexedByPriority[card.position] = card;
      } else {
        if(cardsIndexedByPriority[card.position].priority > card.priority) {
          cardsIndexedByPriority[card.position] = card;
        }
      }
    }

    for (let card of Object.values(cardsIndexedByPriority)) {
      cardsFilteredByPriority.push(card);
    }

    const cardsSortedByPosition = cardsFilteredByPriority.sort((cardOne: ICard, cardTwo: ICard) => (cardOne.position > cardTwo.position) ? 1 : -1);

    return cardsSortedByPosition;
  }

  private _mixCardsWithPosts(cards: ICard[], posts: IPost[]): Array<ICard | IPost> {
    const sortedCards: ICard[] = cards.sort((cardOne: ICard, cardTwo: ICard) => (cardOne.position > cardTwo.position) ? 1 : -1);
    const postsAndCards: Array<ICard | IPost> = [...posts];

    for (let card of sortedCards) {
      if(card.position >= this.feedItems.length && card.position <= (postsAndCards.length + this.feedItems.length)) {
        postsAndCards.splice(card.position, 0, card);
      } else {
        break;
      }
    }
    return postsAndCards;
  }

}
