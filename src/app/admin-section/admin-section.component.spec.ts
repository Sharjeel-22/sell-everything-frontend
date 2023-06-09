import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionComponent } from './admin-section.component';

describe('AdminSectionComponent', () => {
  let component: AdminSectionComponent;
  let fixture: ComponentFixture<AdminSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionComponent]
    });
    fixture = TestBed.createComponent(AdminSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
