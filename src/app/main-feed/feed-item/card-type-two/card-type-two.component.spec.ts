import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeTwoComponent } from './card-type-two.component';

describe('CardTypeTwoComponent', () => {
  let component: CardTypeTwoComponent;
  let fixture: ComponentFixture<CardTypeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
