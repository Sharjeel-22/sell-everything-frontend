import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuallSalesComponent } from './annuall-sales.component';

describe('AnnuallSalesComponent', () => {
  let component: AnnuallSalesComponent;
  let fixture: ComponentFixture<AnnuallSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // declarations: [AnnuallSalesComponent]
    });
    fixture = TestBed.createComponent(AnnuallSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
