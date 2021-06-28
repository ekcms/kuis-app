import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

export enum SearchType1 {
  title = 'Title',
  author = 'Author',
  isbn = 'Isbn',
  issn = 'Issn',
  subject = 'Subject',
  call_number = 'call number',
  series = 'Series'
}

export enum SearchType2 {
  title = 'Title',
  author = 'Author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series'
}

export enum SearchType3 {
  title = 'Title',
  author = 'Author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series',
  summary = 'Summary',
  language = 'Language',
  dissertationnote = 'DissertationNote'
}

export enum SearchType4 {
  title = 'Title',
  author = 'Author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series'
}

export enum SearchType5 {
  title = 'Title',
  author = 'Author',
  isbn = 'isbn',
  issn = 'issn',
  subject = 'subject',
  call_number = 'call number',
  series = 'series'
}

export enum Operators1 {
  and = 'AND',
  or = 'OR',
  not = 'NOT'
}

export enum Operators2 {
  and = 'AND',
  or = 'OR',
  not = 'NOT'
}

export enum Operators3 {
  and = 'AND',
  or = 'OR',
  not = 'NOT'
}

export enum Operators4 {
  and = 'AND',
  or = 'OR',
  not = 'NOT'
}

@Injectable({
  providedIn: 'root'
})
export class AdvSearchService {

  url =  environment.apiUrl + '/api/AdvanceSearch/GetMaterialsAdvance?searchtext=';



  constructor(private http: HttpClient) { }

  searchData(title1: string, type1: SearchType1, operators1: string,
             title2: string, type2: SearchType2, operators2: string, token ): Observable<any> {

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
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.url}${type1},${encodeURI(title1)},${operators1};${type2},${encodeURI(title2)},${operators2};`, requestOptions).pipe(map(results => results)
    );
  }

  searchData2(title1: string, type1: SearchType1, operators1: string,
              title2: string, type2: SearchType2, operators2: string,
              title3: string, type3: string, operators3: string, token): Observable<any> {

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
      // tslint:disable-next-line:max-line-length
      return this.http.get(`${this.url}${type1},${encodeURI(title1)},${operators1};${type2},${encodeURI(title2)},${operators2};${type3},${encodeURI(title3)},${operators3};`, requestOptions).pipe(map(results => results)
      );
  }

  searchData3(
    title1: string, type1: SearchType1, operators1: string,
    title2: string, type2: SearchType2, operators2: string,
    title3: string, type3: string, operators3: string,
    title4: string, type4: string, operators4: string, token): Observable<any> {


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
  // tslint:disable-next-line:max-line-length
  return this.http.get(`${this.url}${type1},${encodeURI(title1)},${operators1};${type2},${encodeURI(title2)},${operators2};${type3},${encodeURI(title3)},${operators3};${type4},${encodeURI(title4)},${operators4};`, requestOptions).pipe(
  map(results => results)
  );
  }

  getAdvDetails(cwId, token) {
    this.url =  environment.apiUrl + '/api/AdvanceSearch/GetMaterialsAdvance?searchtext=';
    console.log('URL ADVANCE' + this.url);
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
