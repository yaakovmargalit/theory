import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _isLoading$: BehaviorSubject<any> = new BehaviorSubject(false);
  public isLoading$ = this._isLoading$.asObservable();
  constructor() {}

  public setLoader(state:boolean){
    console.log(state);
    
    this._isLoading$.next(state)
  }
}
