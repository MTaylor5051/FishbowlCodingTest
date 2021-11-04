import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeZeroComponent } from './card-type-zero.component';

describe('CardTypeZeroComponent', () => {
  let component: CardTypeZeroComponent;
  let fixture: ComponentFixture<CardTypeZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeZeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
