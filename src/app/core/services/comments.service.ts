import { tap } from 'rxjs/operators';
import { Comment } from './../models/comment.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(postId): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      environment.apiURL + `posts/${postId}/comments`);
  }
}
