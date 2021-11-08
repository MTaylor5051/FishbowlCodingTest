import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor  {

  constructor(private _toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = 'ba1df257-2487-4737-a05c-f54108ab8f82';

    const requestAmended = request.clone(
      {
        url: `https://stageapi.fbowlapp.com${request.url}`,
        headers: request.headers.set('session-key', token)
      });

    return next.handle(requestAmended).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
          const message = errorResponse && errorResponse.error && errorResponse.error.message || 'Error sending or receiving data';

          this._toastr.error(`${errorResponse.status} - ${message}`, 'Uh-oh!');

          return throwError(errorResponse);
      }));
}

}

