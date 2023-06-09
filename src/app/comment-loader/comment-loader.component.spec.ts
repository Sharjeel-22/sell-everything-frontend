import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLoaderComponent } from './comment-loader.component';

describe('CommentLoaderComponent', () => {
  let component: CommentLoaderComponent;
  let fixture: ComponentFixture<CommentLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentLoaderComponent]
    });
    fixture = TestBed.createComponent(CommentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
