import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AKBlogComponent} from './components/ak-blog/ak-blog.component';
import {AKBlogItemDetailsComponent} from './components/ak-blog-item-details/ak-blog-item-details.component';
import {AKBlogItemComponent} from './components/ak-blog-item/ak-blog-item.component';

const routes: Routes = [
  {
    path : 'akblog',
    component: AKBlogComponent
  },
  {
    path : 'akblogitem',
    component: AKBlogItemComponent
  },
  {
    path : 'akblogitemdetails',
    component: AKBlogItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
