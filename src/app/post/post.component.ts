import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post: Post;

  @Output() onRemovePost = new EventEmitter<any>();

  constructor() { }

  removePost(): void {
    this.onRemovePost.emit();
  }

  upvote(): void {
    this.post.upvotes++;
  }

}
