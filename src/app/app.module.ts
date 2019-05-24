import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Kol2AppService} from '../service/kol2-app.service';
import { AKBlogComponent } from './components/ak-blog/ak-blog.component';
import { AKBlogItemComponent } from './components/ak-blog-item/ak-blog-item.component';
import { AKBlogItemDetailsComponent } from './components/ak-blog-item-details/ak-blog-item-details.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AKBlogComponent,
    AKBlogItemComponent,
    AKBlogItemDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Kol2AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
