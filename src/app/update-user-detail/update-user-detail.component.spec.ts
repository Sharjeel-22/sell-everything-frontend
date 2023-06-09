import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserDetailComponent } from './update-user-detail.component';

describe('UpdateUserDetailComponent', () => {
  let component: UpdateUserDetailComponent;
  let fixture: ComponentFixture<UpdateUserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserDetailComponent]
    });
    fixture = TestBed.createComponent(UpdateUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
