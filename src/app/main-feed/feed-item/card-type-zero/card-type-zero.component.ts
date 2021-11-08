import { Component, Input } from '@angular/core';

import { ICard } from 'src/app/shared/api/consolidated/models/meta.response-model';

@Component({
  selector: 'app-card-type-zero',
  templateUrl: './card-type-zero.component.html',
  styleUrls: ['./card-type-zero.component.scss']
})
export class CardTypeZeroComponent {

  @Input() card!: ICard | undefined;

  constructor() { }

}
