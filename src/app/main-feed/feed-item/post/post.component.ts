import { Component, Input } from '@angular/core';

import { IPost } from 'src/app/shared/api/consolidated/models/posts.response-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post!: IPost | undefined;

  constructor() { }

  get authorSignature(): string {
    if (this.post && (this.post.sign.signType === 0 || this.post.sign.signType === 3)) {
      return this.post.sign.companyDisplayName;
    }
    if (this.post && this.post.sign.signType === 1) {
      return this.post.sign.location;
    }
    if (this.post && this.post.sign.signType === 2) {
      return this.post.sign.professionalTitle;
    }
    if (this.post && this.post.sign.signType === 4) {
      return this.post.sign.username;
    }
    if (this.post && this.post.sign.signType === 5) {
      return `${this.post.sign.firstLastName.firstName} ${this.post.sign.firstLastName.lastName}`;
    }
    if (this.post && (this.post.sign.signType === 6 || this.post.sign.signType === 7)) {
      return 'Teacher';
    }
    if (this.post && this.post.sign.signType === 8) {
      return 'Deactivated user';
    }

    return '';
  }

  get isMessageTypeTextMessage(): boolean {
    return !!this.post && this.post.messageType === 0;
  }

  get isMessageTypePhoto(): boolean {
    return !!this.post && this.post.messageType === 1;
  }

  get isMessageTypeLink(): boolean {
    return this.isMessageTypeTextMessage &&
    !!this.post && !!this.post.messageData &&
    !!this.post.messageData.text &&
    this.post.messageData.text.includes('http');
  }

  get totalReactions(): number {
    if(!!this.post && this.post.reactionCounters) {
      return this.post.reactionCounters.funny +
      this.post.reactionCounters.helpful +
      this.post.reactionCounters.like +
      this.post.reactionCounters.smart +
      this.post.reactionCounters.uplifting;
    }
    return 0;
  }



}
