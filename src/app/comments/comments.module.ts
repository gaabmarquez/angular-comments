import { TrimPipe } from './../core/pipes/trim.pipe';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [CommentsComponent, CommentDetailComponent, TrimPipe],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
