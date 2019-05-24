import { Component, OnInit } from '@angular/core';
import {Kol2AppService} from '../../../service/kol2-app.service';

@Component({
  selector: 'app-ak-blog',
  templateUrl: './ak-blog.component.html',
  styleUrls: ['./ak-blog.component.css']
})
export class AKBlogComponent implements OnInit {


  constructor(private ServiceKol2: Kol2AppService  ) { }
  posts: any;

  ngOnInit() {
  this.ServiceKol2.getAll().subscribe(posts => this.posts = posts);
  }

}
