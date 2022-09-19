import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions$: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private _http: HttpClient) {}

  getQuestion(): Observable<any> {
    return this.questions$.asObservable();
  }

  setQuestions(questionsNum: number) {
    this._http.get('https://theory-nmfd.onrender.com/get-questions?questionNum=999').subscribe(data=>{
      this.questions$.next(data)
    })
  }
}
