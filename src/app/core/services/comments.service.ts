import { tap } from 'rxjs/operators';
import { Comment } from './../models/comment.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) { }

  getComments(postId): Observable<Comment[]> {

    const cachedResponse = this.cache.get(postId);
    if (cachedResponse) {
      return of(cachedResponse);
    }
    return this.http.get<Comment[]>(
      environment.apiURL + `posts/${postId}/comments`).pipe(
        tap(event => {
          this.cache.set(postId, event);
        })
      )
  }
}
