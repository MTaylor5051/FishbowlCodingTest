import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor  {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = '80e752d7-4ae6-471e-adcd-9b21f76acf35';

    request = request.clone({ url: `https://stageapi.fbowlapp.com${request.url}` });

    if (token) {
        request = request.clone({ headers: request.headers.set('session-key', token) });
    }

    console.log(request)

    return next.handle(request);
}

}
