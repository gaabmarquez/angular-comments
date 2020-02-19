import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../../core/services/comments.service';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  // hardcoded postId , TODO: in the future this id should be taken from query params
  postId = 1;
  loading = false;
  @Input() comments: Comment[] = [];

  constructor(private commentService: CommentsService) { }

  ngOnInit() {

    this.loading = true;

      this.commentService.getComments(this.postId).subscribe(resp => {
        this.comments = resp;
        this.loading = false;

        console.log(resp)
      }, err => {
        console.log(err)
        this.loading = false;

      })

  }

}
