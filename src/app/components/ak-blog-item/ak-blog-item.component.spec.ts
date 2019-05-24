import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AKBlogItemComponent } from './ak-blog-item.component';

describe('AKBlogItemComponent', () => {
  let component: AKBlogItemComponent;
  let fixture: ComponentFixture<AKBlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AKBlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AKBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
