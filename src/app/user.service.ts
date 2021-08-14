import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private LoginUrl = environment.awsLoginUrl;
  private RegisterUrl = environment.awsRegisterUrl;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
    ) { }

  login(data: IUser): Observable<IUser> {
    console.log('DATA: ', data);
    return this.http.post<IUser>(this.LoginUrl, data)
    .pipe(retry(1),
    catchError(this.errorHandler.handleError));
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(this.RegisterUrl, userData)
    .pipe(retry(1),
    catchError(this.errorHandler.handleError))
  }

}
