import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IPostsResponsePayload } from './models/posts.response-model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(count: number, start: number): Observable<IPostsResponsePayload> {
    return this.http.get<IPostsResponsePayload>(`/v4/feed/consolidated/posts?count=${count}&start=${start}`);
  }

}
