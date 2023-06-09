import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewResourceButtonComponent } from './add-new-resource-button.component';

describe('AddNewResourceButtonComponent', () => {
  let component: AddNewResourceButtonComponent;
  let fixture: ComponentFixture<AddNewResourceButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewResourceButtonComponent]
    });
    fixture = TestBed.createComponent(AddNewResourceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
