import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ITags } from '../../tags/tags';

@Injectable({
  providedIn: 'root'
})
export class TagsApiService {
  private tagsUrl: string = '../../../assets/tags.json';
  
  constructor(private http: HttpClient) { }

  public getTags():Observable<ITags[]>{
    return this.http.get<ITags[]>(this.tagsUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error(error.status, error.message)
    throw ('Something bad happened; please try again later.');
  }
}
