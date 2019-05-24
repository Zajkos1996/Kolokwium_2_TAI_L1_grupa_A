import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AKBlogComponent } from './ak-blog.component';

describe('AKBlogComponent', () => {
  let component: AKBlogComponent;
  let fixture: ComponentFixture<AKBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AKBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AKBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
