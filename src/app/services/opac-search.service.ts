import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

export enum SearchType {
  title = 'title',
  author = 'author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series'
}

@Injectable({
  providedIn: 'root'
})
export class OpacSearchService {

  url = 'http://192.168.100.101:8081/api/material';
  urlmetadata = 'http://192.168.100.101:8081/api/Metadata';
  urlrepo = 'http://192.168.100.101:8081/api/Econtent';

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    ) { }


  searchData(title: string, type: SearchType, token): Observable<any> {

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(`${this.url}?searchfield=${encodeURI(title)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results),
      catchError(err => {
        this.toastService.presentToast('No data available');
        return throwError(err);
      })

    );
  }

  searchMetadata(title: string, type: SearchType, token): Observable<any> {

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(`${this.urlmetadata}?searchfield=${encodeURI(title)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results),
      catchError(err => {
        this.toastService.presentToast('No data available');
        return throwError(err);
      })
    );
  }

  searchRepo(title: string, type: SearchType, token): Observable<any> {

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(`${this.urlrepo}?searchfield=${encodeURI(title)}&searchtype=${type}`, requestOptions).pipe(
      map(results => results),
      catchError(err => {
        this.toastService.presentToast('No data available');
        return throwError(err);
      })
    );
  }



  getDetails(cwId, token) {
    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get(`${this.url}?CitedworkId=${encodeURI(cwId)}`, requestOptions);
  }}
