import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSellingRatioComponent } from './item-selling-ratio.component';

describe('ItemSellingRatioComponent', () => {
  let component: ItemSellingRatioComponent;
  let fixture: ComponentFixture<ItemSellingRatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSellingRatioComponent]
    });
    fixture = TestBed.createComponent(ItemSellingRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
