import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldItemsPercentageComponent } from './sold-items-percentage.component';

describe('SoldItemsPercentageComponent', () => {
  let component: SoldItemsPercentageComponent;
  let fixture: ComponentFixture<SoldItemsPercentageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoldItemsPercentageComponent]
    });
    fixture = TestBed.createComponent(SoldItemsPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
