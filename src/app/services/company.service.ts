import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {NotFoundError} from '../common/not-found-error';
import {AppError} from '../common/app-error';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
private companyTypesUrl = 'https://api.jsonbin.io/b/5f2560b01823333f8f19b7cd';
private companiesUrl = 'https://api.jsonbin.io/b/5f25613bdddf413f95ba07bc';
  constructor(private http: HttpClient) { }

  getCompanyTypes(): Observable<any> {
    return this.http.get(this.companyTypesUrl)
      .pipe(catchError((error: Response) => {
        if (error.status === 400) {
          return throwError(new NotFoundError());
        } else {
          return throwError(new AppError());
        }
      }));
  }

  getCompanies(): Observable<any> {
    return this.http.get(this.companiesUrl)
      .pipe(catchError((error: Response) => {
        if (error.status === 404) {
          return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
      }));
  }
}
