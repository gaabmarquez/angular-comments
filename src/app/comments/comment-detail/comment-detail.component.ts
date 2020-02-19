import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent {
  comment = {}

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.comment = new Comment(params['postId'], params['id'], params['name'], params['email'], params['body'])
    });

  }
}
