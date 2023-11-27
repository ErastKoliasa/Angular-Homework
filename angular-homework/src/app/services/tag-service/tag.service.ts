import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITags } from '../../tags/tags';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private readonly _tags$: BehaviorSubject<ITags[]> = new BehaviorSubject<ITags[]>([]);
  public readonly tags$ = this._tags$;

  get tags():ITags[] {
    return this._tags$.getValue();
  }

  private set tags(tags:ITags[]){
    this._tags$.next(tags);
  }

  public setTags(tags: ITags[]): void{
    this.tags = tags;
  }
}
