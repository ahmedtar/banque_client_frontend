import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.authenticationService.isUserLoggedIn() &&
      req.url.indexOf("auth") === -1
    ) {
      console.log("innn");
      const authReq = req.clone({
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: `Basic ${window.btoa(
            this.authenticationService.username +
              ":" +
              this.authenticationService.password
          )}`,
        }),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
