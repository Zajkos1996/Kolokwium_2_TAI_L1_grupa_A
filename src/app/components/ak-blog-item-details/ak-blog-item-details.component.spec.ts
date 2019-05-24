import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AKBlogItemDetailsComponent } from './ak-blog-item-details.component';

describe('AKBlogItemDetailsComponent', () => {
  let component: AKBlogItemDetailsComponent;
  let fixture: ComponentFixture<AKBlogItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AKBlogItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AKBlogItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
