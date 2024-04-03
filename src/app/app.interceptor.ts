import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, from, throwError } from 'rxjs';
import { environmentUrl } from 'src/environments/enviroments';
import { ErrorService } from './core/error.service';


const { url } = environmentUrl;
@Injectable()

export class AppInterceptor implements HttpInterceptor {

    constructor( private router: Router, private errorService: ErrorService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const updatedReq = req.clone(req);
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                
                if (error.status === 401) {
                    // console.log(error.statusText);
                   
                    this.router.navigate(['/login'])
                } else if (error.status === 404){
                    // console.log("Not found");
                }

                return throwError(() => new Error(error.statusText))
            })
        );
    }
}

export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS,
};
