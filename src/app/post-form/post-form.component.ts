import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  @Output() submitted = new EventEmitter<any>();

  constructor() { }

  submitPost(form) {
    this.submitted.emit({
      subject: form.value.subject,
      body: form.value.body
    });
    form.resetForm();
  }
}
