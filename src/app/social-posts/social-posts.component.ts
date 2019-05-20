import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {

  //array of the posts
  posts: Post[] = [
    {
      subject: "hey",
      body: "what's up"
    },
    {
      subject: "wow",
      body: "wowie zowie"
    },
    {
      subject: "neat",
      body: "neat"
    },
    {
      subject: "lol",
      body: "big mood"
    },
    {
      subject: "cancelled",
      body: "get out"
    }
  ];

  //boolean for if the form should be showing
  formShowing: boolean = false;

  constructor() { }

  //handle when a post is submitted
  onSubmit(post: Post): void {
    this.posts.unshift(post); //add the post to the beginning of the array
    this.formShowing = false; //remove the form after
  }

  //remove the post at the given index
  removePost(index: number): void {
    this.posts.splice(index, 1); //remove the post from the array
  }

  //toggle if the form should show
  toggleForm(): void {
    this.formShowing = !this.formShowing;
  }

}
