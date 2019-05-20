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

  onSubmit(post: Post): void {
    console.log(post);
    this.posts.push(post); //add the post to the array
    this.formShowing = false; //remove the form after
  }

  removePost(index: number): void {
    console.log(index);
    this.posts.splice(index, 1); //remove the post from the array
  }

  toggleForm(): void {
    this.formShowing = !this.formShowing;
  }

}
