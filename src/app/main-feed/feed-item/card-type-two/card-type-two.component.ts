import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IAnswer, ICard } from 'src/app/shared/api/consolidated/models/meta.response-model';

@Component({
  selector: 'app-card-type-two',
  templateUrl: './card-type-two.component.html',
  styleUrls: ['./card-type-two.component.scss']
})
export class CardTypeTwoComponent implements OnInit {

  @Input() card!: ICard | undefined;

  pollForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (!!this.card && !!this.card.content && !!this.card.content.answers && !!this.card.content.answers.length) {
      this.buildPoll(this.card.content.answers);
    }
  }

  buildPoll(answers: IAnswer[]): void {

    const pollForm: { [key: string]: any } = {}

    for(let radioOption of answers) {
      pollForm[radioOption._id] = [''];
    }

    this.pollForm = this._formBuilder.group(pollForm);
  }

}
