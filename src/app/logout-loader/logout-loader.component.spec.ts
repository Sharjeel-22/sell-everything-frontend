import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutLoaderComponent } from './logout-loader.component';

describe('LogoutLoaderComponent', () => {
  let component: LogoutLoaderComponent;
  let fixture: ComponentFixture<LogoutLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutLoaderComponent]
    });
    fixture = TestBed.createComponent(LogoutLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
