import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsComponent } from './comments/comments.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

const routes: Routes = [
  { path: '', component: CommentsComponent },
  { path: ':id', component: CommentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
