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

    const token: string = '80e752d7-4ae6-471e-adcd-9b21f76acf35';

    const requestAmended = request.clone(
      {
        url: `https://stageapi.fbowlapp.com${request.url}`,
        headers: request.headers.set('session-key', token)
      });

    return next.handle(requestAmended).pipe(
      // map((event: HttpEvent<any>) => {
      //     if (event instanceof HttpResponse) {
      //         console.log('event--->>>', event);
      //     }
      //     return event;
      // }),
      catchError((errorResponse: HttpErrorResponse) => {
          const reason = errorResponse && errorResponse.error && errorResponse.error.message || 'Error sending or receiving data';

          this._toastr.error(`${errorResponse.status} - ${reason}`, 'Uh-oh!');

          return throwError(errorResponse);
      }));
}

}

