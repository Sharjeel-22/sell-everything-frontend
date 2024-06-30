import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRevenueComponent } from './user-revenue.component';

describe('UserRevenueComponent', () => {
  let component: UserRevenueComponent;
  let fixture: ComponentFixture<UserRevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRevenueComponent]
    });
    fixture = TestBed.createComponent(UserRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
