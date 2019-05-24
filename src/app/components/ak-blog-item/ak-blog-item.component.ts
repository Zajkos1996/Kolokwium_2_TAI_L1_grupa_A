import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ak-blog-item',
  templateUrl: './ak-blog-item.component.html',
  styleUrls: ['./ak-blog-item.component.css']
})
export class AKBlogItemComponent implements OnInit {

  @Input() title = '';
  @Input() text: string;
  @Input() image: '';

  constructor() { }

  ngOnInit() {
  }

}
