import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITags } from '../../tags/tags';

@Injectable({
  providedIn: 'root'
})
export class TagsApiService {
  constructor(private http: HttpClient) { }

  public getTags():Observable<ITags[]>{
    return this.http.get<ITags[]>('../../../assets/tags.json');
  }
}
