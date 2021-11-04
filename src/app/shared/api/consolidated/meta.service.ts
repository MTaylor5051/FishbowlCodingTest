import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { IMetaResponsePayload } from './models/meta.response-model';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private http: HttpClient) { }

  getMeta(): Observable<IMetaResponsePayload> {
    return this.http.get<IMetaResponsePayload>(`/v4/feed/consolidated/meta`);
  }
}
